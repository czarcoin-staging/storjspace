const BRIDGE_URL = process.env.NODE_ENV === 'development'
  ? 'localhost:6382'
  : 'api.storj.io'

export default {
  bridge: BRIDGE_URL,
  basicAuth: {
    email: '',
    password: ''
  },
  key: '',
  encryptionKey: ''
}
