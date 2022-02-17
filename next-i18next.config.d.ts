import 'react-i18next'
import { IResources } from './locales/locales.interface'

declare module 'react-i18next' {
  interface Resources extends IResources {}
}

