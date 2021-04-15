import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secondary: string
      success: string
      danger: string
      warning: string
      info: string
      'gray-1': string
      'gray-2': string
      'gray-3': string
      'gray-4': string
      'gray-5': string
    }
    text: {
      sizes: {
        sm: string
        md: string
        lg: string
      }
    }
    icon: {
      sizes: {
        sm: string
        md: string
        lg: string
      }
    }
    button: {
      block?: Boolean
      colors: {
        primary: string
        secondary: string
        success: string
        danger: string
        warning: string
        info: string
      }
      borderRadius: {
        rounded: string
        square: string
      }
      sizes: {
        sm: {
          font: string
          padding: string
        }
        md: {
          font: string
          padding: string
        }
        lg: {
          font: string
          padding: string
        }
      }
    }
  }
}
