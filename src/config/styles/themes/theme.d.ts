import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    button: {
      colors: {
        primary: string
        secondary: string
      }
    }
  }
}
