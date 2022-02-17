
export const environment = process.env
export const NODE_ENV = environment.NODE_ENV

export const isDevelopment = Object.is(NODE_ENV, 'development')
export const isProduction = Object.is(NODE_ENV, 'production')

export const isStatic = process && (process.static || false)
export const isServer = process && process.server
export const isBrowser = process && process.browser
export const isModern = process && process.modern
