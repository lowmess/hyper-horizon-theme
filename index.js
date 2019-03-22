// Require OS Home environment
// Require hyper.js configuration from user home

// Check the enableVibrance setting and update background color


exports.decorateConfig = config => {
  config.backgroundColor = '#1C1E26';
  config.foregroundColor = '#ECEFF1';
  config.borderColor = '#37474F';
  config.padding = '24px 24px';

  return Object.assign({}, config, {
    cursorColor: '#E95378',
    colors: {
      black: '#1C1E26',
      red: '#E95378',
      green: '#29D398',
      yellow: '#FAB795',
      blue: '#26BBD9',
      magenta: '#EE64AC',
      cyan: '#59E1E3',
      white: '#D5D8DA',
      lightBlack: '#6C6F9399',
      lightRed: '#EC6A88',
      lightGreen: '#3FDAA4',
      lightYellow: '#FBC3A7',
      lightBlue: '#3FC4DE',
      lightMagenta: '#F075B5',
      lightCyan: '#6BE4E6',
      lightWhite: '#ffffff'
    },
    termCSS: `
      .xterm-text-layer a {
        text-decoration: underline !important;
        color: #FAB795E6 !important;
      }

      *::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: transparent;
      }

      *::-webkit-scrollbar-track {
        background-color: transparent;
      }

      *::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
      }

      *::-webkit-scrollbar-thumb:window-inactive {
        background: transparent;
      }
    `,
    css: `
      .hyper_main {
        border: none;
      }

      .tabs_borderShim {
        display: none;
      }

      .tab_tab {
        border: none;
        color: #6C6F9380;
        background-color: transparent;
      }

      .tab_tab:hover {
        background-color: transparent;
      }

      .tab_tab::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: '#E95378';
        transform: scaleX(0);
        transition: none;
      }

      .tab_tab.tab_active {
        color: #D5D8DA;
      }

      .tab_tab.tab_active::before {
        transform: scaleX(1);
        transition: all 300ms cubic-bezier(0.0, 0.0, 0.2, 1)
      }

      .tab_textInner {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 100%;
        padding: 0px 24px 0 8px;
      }

      .splitpane_divider {
        background-color: #1A1C23 !important;
      }
    `
  });
};