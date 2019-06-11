import { cssToDom, nProps, isArray, getUse, hyphenate } from './util'
import { diff } from './vdom/diff'
import options from './options'
import { proxyUpdate } from './observe'
import { getPath } from './define'

let id = 0

export default class WeElement extends HTMLElement {
  static is = 'WeElement'

  constructor() {
    super()
    this.props = Object.assign(
      nProps(this.constructor.props),
      this.constructor.defaultProps
    )
    this.elementId = id++
    this.data = {}
  }

  connectedCallback() {
    let p = this.parentNode
    while (p && !this.store) {
      this.store = p.store
      p = p.parentNode || p.host
    }
    if (this.store) {
      this.store.instances.push(this)
    }

    if (this.initUse) {
      const use = this.initUse()
      this._updatePath = getPath(use)
      this.use = getUse(this.store.data, use)
    } else {
      this.constructor.use && (this.use = getUse(this.store.data, this.constructor.use))
		}
		this.attrsToProps()
    this.beforeInstall()
    this.install()
    this.afterInstall()

    let shadowRoot
    if (!this.shadowRoot) {
      shadowRoot = this.attachShadow({
        mode: 'open'
      })
    } else {
      shadowRoot = this.shadowRoot
      let fc
      while ((fc = shadowRoot.firstChild)) {
        shadowRoot.removeChild(fc)
      }
    }
    
    if (this.constructor.css) {
      shadowRoot.appendChild(cssToDom(this.constructor.css))
    } else if (this.css) {
      shadowRoot.appendChild(cssToDom(typeof this.css === 'function' ? this.css() : this.css))
    }
    this.beforeRender()
    options.afterInstall && options.afterInstall(this)
    if (this.constructor.observe) {
      this.beforeObserve()
      proxyUpdate(this)
      this.observed()
    }

    const rendered = this.render(this.props, this.data, this.store)
    this.__hasChildren = Object.prototype.toString.call(rendered) ==='[object Array]' && rendered.length > 0

    this._host = diff(
      null,
      rendered,
      {},
      false,
      null,
      false
    )
    this.rendered()

    if (this.props.css) {
      this._customStyleElement = cssToDom(this.props.css)
      this._customStyleContent = this.props.css
      shadowRoot.appendChild(this._customStyleElement)
    }

    if (isArray(this._host)) {
      this._host.forEach(function (item) {
        shadowRoot.appendChild(item)
      })
    } else {
      shadowRoot.appendChild(this._host)
    }
    this.installed()
    this._isInstalled = true
  }

  disconnectedCallback() {
    this.uninstall()
    this._isInstalled = false
    if (this.store) {
      for (let i = 0, len = this.store.instances.length; i < len; i++) {
        if (this.store.instances[i] === this) {
          this.store.instances.splice(i, 1)
          break
        }
      }
    }
  }

  update() {
    this._willUpdate = true
    this.beforeUpdate()
    this.beforeRender()
    //fix null !== undefined
    if (this._customStyleContent != this.props.css) {
      this._customStyleContent = this.props.css
      this._customStyleElement.textContent = this._customStyleContent
    }
    this.attrsToProps()

    const rendered = this.render(this.props, this.data, this.store)
    this.__hasChildren = this.__hasChildren || (Object.prototype.toString.call(rendered) ==='[object Array]' && rendered.length > 0)

    this._host = diff(
      this._host,
      rendered,
      null,
      null,
      this.shadowRoot
    )
    this._willUpdate = false
    this.updated()
  }

  removeAttribute(key) {
    super.removeAttribute(key)
    //Avoid executing removeAttribute methods before connectedCallback
    this._isInstalled && this.update()
  }

  setAttribute(key, val) {
    if (val && typeof val === 'object') {
      super.setAttribute(key, JSON.stringify(val))
    } else {
      super.setAttribute(key, val)
    }
    //Avoid executing setAttribute methods before connectedCallback
    this._isInstalled && this.update()
  }

  pureRemoveAttribute(key) {
    super.removeAttribute(key)
  }

  pureSetAttribute(key, val) {
    super.setAttribute(key, val)
  }

  attrsToProps() {
    const ele = this
    if (ele.normalizedNodeName) return
    ele.props['css'] = ele.getAttribute('css')
    const attrs = this.constructor.propTypes
    if(!attrs) return
    Object.keys(attrs).forEach(key => {
      const type = attrs[key]
      const val = ele.getAttribute(hyphenate(key))
      if (val !== null) {
        switch (type) {
          case String:
            ele.props[key] = val
            break
          case Number:
            ele.props[key] = Number(val)
            break
          case Boolean:
            if (val === 'false' || val === '0') {
              ele.props[key] = false
            } else {
              ele.props[key] = true
            }
						break
					case Array:
          case Object:
            ele.props[key] = JSON.parse(val
              .replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:([^\/])/g, '"$2":$4')
              .replace(/'([\s\S]*?)'/g, '"$1"')
              .replace(/,(\s*})/g, '$1')
              )
            break
        }
      } else {
        if (ele.constructor.defaultProps && ele.constructor.defaultProps.hasOwnProperty(key)) {
          ele.props[key] = ele.constructor.defaultProps[key]
        } else {
					ele.props[key] = null
				}
			}
    })
  }

  fire(name, data) {
    this.dispatchEvent(new CustomEvent(name.replace(/-/g, '').toLowerCase(), { detail: data }))
  }

  beforeInstall() { }

  install() { }

  afterInstall() { }

  installed() { }

  uninstall() { }

  beforeUpdate() { }

  updated() { }

  beforeRender() { }

  rendered() { }

  receiveProps() { }

  beforeObserve() { }

  observed() { }
}
