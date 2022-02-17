import common from './ru-RU/common.json'
import errors from './ru-RU/errors.json'

export interface IResources {
  common: typeof common
  errors: typeof errors
}

export enum Locale {
  'ru-RU'
}
