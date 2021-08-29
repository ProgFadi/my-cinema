
import {THEMES} from '../common/Constants'
import Typ from './Typ'
const themeOptions = [
    // default, light
    {
        name:THEMES.LIGHT,
        Typ,
        overrides: {
            MuiInputBase: {
              input: {
                '&::placeholder': {
                  opacity: 1,
                  color: 'white'
                }
              }
            }
          },
          palette: {
            type: 'light',
            action: {
              active: colors.blueGrey[600]
            },
            background: {
              default: colors.common.white,
              dark: colors.common.white,
              paper: colors.common.white
            },
            primary: {
              main: '#00bbf0'//ex: top bar
            },
            secondary: {
              main: '#fdb44b' // 
            },
            text: {
              primary: colors.blueGrey[900],
              secondary: colors.blueGrey[600]
            }
          },
          shadows: softShadows
        },
        {
          name: THEMES.ONE_DARK,
          palette: {
            type: 'light',
            action: {
              active: 'rgba(255, 255, 255, 0.54)',
              hover: 'rgba(255, 255, 255, 0.04)',
              selected: 'rgba(255, 255, 255, 0.08)',
              disabled: 'rgba(255, 255, 255, 0.26)',
              disabledBackground: 'rgba(255, 255, 255, 0.12)',
              focus: 'rgba(255, 255, 255, 0.12)'
            },
            background: {
              default: '#182131',
              dark:'#000009',
              paper: colors.common.white
            },
            primary: {
              main: '#182131'
            },
            secondary: {
              main: '#ffd369'
            },
            text: {
              primary: '#ffffff',
              secondary: '#000000'
            }
          },
          shadows: strongShadows
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#005792',
        dark:'#f0f0f0',
        paper: colors.common.white
      },
      primary: {
        main: '#00204a'
      },
      secondary: {
        main: '#fdb44b'
      },
      text: {
        primary: '#2d2d2e',
        secondary: '#8a8a8a'
      }
    },
    shadows: strongShadows
    }
]
export const createTheme = (config = {})=>{
    let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

    if (!themeOptions) {
      console.warn(new Error(`The theme ${config.theme} is not valid`));
      [themeOptions] = themesOptions;
    }
  
    let theme = createMuiTheme(
      
        
      
    );
  
    if (config.responsiveFontSizes) {
      theme = responsiveFontSizes(theme);
    }
  
    return theme;
}