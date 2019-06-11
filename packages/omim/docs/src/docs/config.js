const config = {
  menus: {
    'zh-cn': [
      {
        title: 'Omim',
        list: [
          { name: '简介', md: 'introduction' }
        ]
      },
      {
        title: '基础',
        list: [
          { name: 'Button', md: 'button', demo: './repl/button.html' },
          { name: 'Fab', md: 'fab', demo: './repl/fab.html' },
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' },
          { name: 'IconButton', md: 'icon-button', demo: './repl/icon-button.html' },
          { name: 'Avatar', md: 'avatar', demo: './repl/avatar.html' },
          { name: 'Loading', md: 'loading', demo: './repl/loading.html' },
          { name: 'Breadcrumb', md: 'breadcrumb', demo: './repl/breadcrumb.html' }
        ]
      },
      {
        title: '公用',
        list: [
          { name: 'Transition', md: 'transition', demo: 'https://tencent.github.io/omi/packages/omim/demos/transition/index.html' },
          { name: 'To', md: 'to', demo: 'https://tencent.github.io/omi/packages/omim/demos/to/index.html' },
          { name: 'Theme', md: 'theme', demo: 'https://tencent.github.io/omi/packages/omim/demos/button/index.theme.html' },
          { name: 'Typography', md: 'typography', demo: './repl/typography.html' },
          { name: 'Layout Grid', md: 'layout-grid', demo: 'https://tencent.github.io/omi/packages/omim/demos/layout-grid/index.repl.html' }
        ]
      },
      {
        title: '布局',
        list: [
          { name: 'Row', md: 'row', demo: './repl/row.html' },

          { name: 'Elevation', md: 'elevation', demo: './repl/elevation.html' },
          { name: 'Image List', md: 'image-list', demo: './repl/image-list.html' }
        ]
      },
      {
        title: '导航',
        list: [
          { name: 'Top App Bar', md: 'top-app-bar', demo: 'https://tencent.github.io/omi/packages/omim/demos/top-app-bar/index.html' },
          { name: 'Menu', md: 'menu', demo: './repl/menu.html' },
          { name: 'Drawer', md: 'drawer', demo: 'https://tencent.github.io/omi/packages/omim/demos/drawer/index.html' },
          { name: 'Tab', md: 'tab', demo: './repl/tab.html' },
          { name: 'Nav', md: 'nav', demo: './repl/nav.html' },
          { name: 'Pagination', md: 'pagination', demo: 'https://tencent.github.io/omi/packages/omim/demos/pagination/index.script.html'  }
        ]
      },
      {
        title: '操作反馈',
        list: [
          {name: 'Dialog', md: 'dialog', demo: './repl/dialog.html'},
          {name: 'Snackbar', md: 'snackbar', demo: './repl/snackbar.html'},
          {name: 'ActionSheet', md: 'action-sheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/action-sheet/index.script.html'},
          {name: 'ColorPicker', md: 'color-picker', demo: './repl/color-picker.html'},
          { name: 'Popover', md: 'popover', demo: 'https://tencent.github.io/omi/packages/omim/demos/popover/index.html' },
          { name: 'Toast', md: 'toast', demo: 'https://tencent.github.io/omi/packages/omim/demos/toast/index.html' }
        ]
      },
      {
        title: '表单',
        list: [
          { name: 'Text Field', md: 'text-field', demo: './repl/text-field.html' },
          { name: 'Select', md: 'select', demo: './repl/select.html' },
          { name: 'Checkbox', md: 'checkbox', demo: './repl/checkbox.html' },
          { name: 'Radio', md: 'radio', demo: './repl/radio.html' },
          { name: 'Switch', md: 'switch', demo: './repl/switch.html' },
          { name: 'DateTimePicker', md: 'date-time-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-time-picker/index.script.html' },
          { name: 'Picker', md: 'picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/picker/index.script.html' }
        ]
      },
      {
        title: '数据',
        list: [
          { name: 'List', md: 'list', demo: './repl/list.html' },
          { name: 'Table', md: 'table', demo: 'https://tencent.github.io/omi/packages/omim/demos/table/index.script.html' },
          { name: 'Linear Progress', md: 'linear-progress', demo: './repl/linear-progress.html' },
          { name: 'Slider', md: 'slider', demo: './repl/slider.html' },
          { name: 'Chips', md: 'chips', demo: './repl/chips.html' },
          { name: 'Tag', md: 'tag', demo: './repl/tag.html' },
          { name: 'Badge', md: 'badge', demo: './repl/badge.html' },
          { name: 'Tree', md: 'tree', demo: './repl/tree.html' },
          { name: 'Card', md: 'card', demo: './repl/card.html' },
          { name: 'Path Progress', md: 'path-progress', demo: './repl/path-progress.html' },
          { name: 'Paper', md: 'paper', demo: './repl/paper.html' },
          { name: 'Step', md: 'step', demo: './repl/step.html' }
        ]
      },
      {
        title: '图表',
        list: [
          { name: '简介', md: 'introduction-chart' },
          { name: '柱状图', md: 'bar', demo: './repl/bar.html' },
          { name: '线状图', md: 'line', demo: './repl/line.html' },
          { name: '散点图', md: 'scatter', demo: './repl/scatter.html' },
          { name: '饼图', md: 'pie', demo: './repl/pie.html' },
          { name: '环状图', md: 'doughnut', demo: './repl/doughnut.html' },
          { name: '雷达图', md: 'radar', demo: './repl/radar.html' },
          { name: '极区图', md: 'polar-area', demo: './repl/polar-area.html' },
          { name: '气泡图', md: 'bubble', demo: './repl/bubble.html' },
          { name: '合成图', md: 'bar-line', demo: './repl/bar-line.html' }
        ]
      }
    ],
    en: [
      {
        title: 'Omim',
        list: [
          { name: 'Introduction', md: 'introduction' }
        ]
      },
      {
        title: 'Base',
        list: [
          { name: 'Button', md: 'button', demo: './repl/button.html' },
          { name: 'Fab', md: 'fab', demo: './repl/fab.html' },
          { name: 'Icon', md: 'icon', demo: './repl/icon.html' },
          { name: 'IconButton', md: 'icon-button', demo: './repl/icon-button.html' },
          { name: 'Avatar', md: 'avatar', demo: './repl/avatar.html' },
          { name: 'Loading', md: 'loading', demo: './repl/loading.html' },
          { name: 'Breadcrumb', md: 'breadcrumb', demo: './repl/breadcrumb.html' }
        ]
      },
      {
        title: 'Util',
        list: [
          { name: 'Transition', md: 'transition', demo: 'https://tencent.github.io/omi/packages/omim/demos/transition/index.html' },
          { name: 'To', md: 'to', demo: 'https://tencent.github.io/omi/packages/omim/demos/to/index.html' },
          { name: 'Theme', md: 'theme', demo: 'https://tencent.github.io/omi/packages/omim/demos/button/index.theme.html' },
          { name: 'Typography', md: 'typography', demo: './repl/typography.html' },
          { name: 'Layout Grid', md: 'layout-grid', demo: 'https://tencent.github.io/omi/packages/omim/demos/layout-grid/index.repl.html' }
        ]
      },
      {
        title: 'Layout',
        list: [
          { name: 'Row', md: 'row', demo: './repl/row.html' },
          { name: 'Elevation', md: 'elevation', demo: './repl/elevation.html' },
          { name: 'Image List', md: 'image-list', demo: './repl/image-list.html' }
        ]
      },
      {
        title: 'Navigation',
        list: [
          { name: 'Top App Bar', md: 'top-app-bar', demo: 'https://tencent.github.io/omi/packages/omim/demos/top-app-bar/index.html' },
          { name: 'Menu', md: 'menu', demo: './repl/menu.html' },
          { name: 'Drawer', md: 'drawer', demo: 'https://tencent.github.io/omi/packages/omim/demos/drawer/index.html' },
          { name: 'Tab', md: 'tab', demo: './repl/tab.html' },
          { name: 'Nav', md: 'nav', demo: './repl/nav.html' },
          { name: 'Pagination', md: 'pagination', demo: 'https://tencent.github.io/omi/packages/omim/demos/pagination/index.script.html'  }
        ]
      },
      {
        title: 'Operational Feedback',
        list: [
          {name: 'Dialog', md: 'dialog', demo: './repl/dialog.html'},
          {name: 'Snackbar', md: 'snackbar', demo: './repl/snackbar.html'},
          {name: 'ActionSheet', md: 'action-sheet', demo: 'https://tencent.github.io/omi/packages/omim/demos/action-sheet/index.script.html'},
          {name: 'ColorPicker', md: 'color-picker', demo: './repl/color-picker.html'},
          { name: 'Popover', md: 'popover', demo: 'https://tencent.github.io/omi/packages/omim/demos/popover/index.html' },
          { name: 'Toast', md: 'toast', demo: 'https://tencent.github.io/omi/packages/omim/demos/toast/index.html' }
        ]
      },
      {
        title: 'Form',
        list: [
          { name: 'Text Field', md: 'text-field', demo: './repl/text-field.html' },
          { name: 'Select', md: 'select', demo: './repl/select.html' },
          { name: 'Checkbox', md: 'checkbox', demo: './repl/checkbox.html' },
          { name: 'Radio', md: 'radio', demo: './repl/radio.html' },
          { name: 'Switch', md: 'switch', demo: './repl/switch.html' },
          { name: 'DateTimePicker', md: 'date-time-picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/date-time-picker/index.script.html' },
          { name: 'Picker', md: 'picker', demo: 'https://tencent.github.io/omi/packages/omim/demos/picker/index.script.html' }
        ]
      },
      {
        title: 'Data',
        list: [
          { name: 'List', md: 'list', demo: './repl/list.html' },
          { name: 'Table', md: 'table', demo: 'https://tencent.github.io/omi/packages/omim/demos/table/index.script.html' },
          { name: 'Linear Progress', md: 'linear-progress', demo: './repl/linear-progress.html' },
          { name: 'Slider', md: 'slider', demo: './repl/slider.html' },
          { name: 'Chips', md: 'chips', demo: './repl/chips.html' },
          { name: 'Tag', md: 'tag', demo: './repl/tag.html' },
          { name: 'Badge', md: 'badge', demo: './repl/badge.html' },
          { name: 'Tree', md: 'tree', demo: './repl/tree.html' },
          { name: 'Card', md: 'card', demo: './repl/card.html' },
          { name: 'Path Progress', md: 'path-progress', demo: './repl/path-progress.html' },
          { name: 'Paper', md: 'paper', demo: './repl/paper.html' },
          { name: 'Step', md: 'step', demo: './repl/step.html' }
        ]
      },
      {
        title: 'Chart',
        list: [
          { name: 'Introduction', md: 'introduction-chart' },
          { name: 'Bar', md: 'bar', demo: './repl/bar.html' },
          { name: 'Line', md: 'line', demo: './repl/line.html' },
          { name: 'Scatter', md: 'scatter', demo: './repl/scatter.html' },
          { name: 'Pie', md: 'pie', demo: './repl/pie.html' },
          { name: 'Doughnut', md: 'doughnut', demo: './repl/doughnut.html' },
          { name: 'Radar', md: 'radar', demo: './repl/radar.html' },
          { name: 'PolarArea', md: 'polar-area', demo: './repl/polar-area.html' },
          { name: 'Bubble', md: 'bubble', demo: './repl/bubble.html' },
          { name: 'BarLine', md: 'bar-line', demo: './repl/bar-line.html' }


        ]
      }
    ]
  }
}

export default config
