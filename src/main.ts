import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入vue-amap
import VueAMap, { initAMapApiLoader } from '@vuemap/vue-amap'
import '@vuemap/vue-amap/dist/style.css'

initAMapApiLoader({
  key: '9ceb98ff8c503555c65bfa7ee4abc30c',
  securityJsCode: 'a62d78459d50f8b90d5ffccca43594b3', // 新版key需要配合安全密钥使用
  offline: true,
})

createApp(App).use(VueAMap).mount('#app')
