import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  title: 'light',
  colors: {
    primary: '#331832',
    secondary: '#694d75',
    success: '#419D78',
    danger: '#E84855',
    warning: '#FFB563',
    info: '#6DB1BF',
    'gray-1': '#212529',
    'gray-2': '#343a40',
    'gray-3': '#495057',
    'gray-4': '#6c757d',
    'gray-5': '#adb5bd',
  },

  text: {
    sizes: {
      sm: '10px',
      md: '14px',
      lg: '20px',
    },
  },

  icon: {
    sizes: {
      sm: '12px',
      md: '16px',
      lg: '22px',
    },
  },

  button: {
    colors: {
      primary: '#331832',
      secondary: '#694d75',
      success: '#419D78',
      danger: '#E84855',
      warning: '#FFB563',
      info: '#6DB1BF',
    },
    borderRadius: {
      rounded: '8px',
      square: '0px',
    },
    sizes: {
      sm: {
        font: '10px',
        padding: '4px 8px 4px 8px',
      },
      md: {
        font: '14px',
        padding: '8px 16px 8px 16px',
      },
      lg: {
        font: '22px',
        padding: '12px 18px 12px 18px',
      },
    },
  },
}
