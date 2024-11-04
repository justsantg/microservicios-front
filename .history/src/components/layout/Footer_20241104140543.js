Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:79:19)
    at Object.createHash (node:crypto:139:10)
    at module.exports (C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\webpack\lib\util\createHash.js:90:53)
    at NormalModule._initBuildHash (C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\webpack\lib\NormalModule.js:401:16)
    at C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\webpack\lib\NormalModule.js:433:10
    at C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\webpack\lib\NormalModule.js:308:13
    at C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\loader-runner\lib\LoaderRunner.js:367:11
    at C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\loader-runner\lib\LoaderRunner.js:233:18
    at context.callback (C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\loader-runner\lib\LoaderRunner.js:111:13)
    at C:\Users\GROUP POWER\Desktop\Trabajos\microservicios-front\node_modules\babel-loader\lib\index.js:51:103 {
  opensslErrorStack: [
    'error:03000086:digital envelope routines::initialization error',
    'error:0308010C:digital envelope routines::unsupported'
  ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
