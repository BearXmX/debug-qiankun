/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  import { ElButton } from 'element-plus'
  const component: DefineComponent<{}, {}, any>
  export default {}
}
