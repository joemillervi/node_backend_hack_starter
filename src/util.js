const env = require(path.resolve(process.env.HOME, 'env.js')) 


export const isProductionEnv = env.CURRENT_ENVRIONMENT === 'prod'
