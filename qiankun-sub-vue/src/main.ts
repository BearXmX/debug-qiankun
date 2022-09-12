import { App as AppElement, createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import './public-path'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper'

let instance: AppElement<Element> | null

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({})
}

renderWithQiankun({
  mount(props: any) {
    render(props)
    instance!.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
    instance!.config.globalProperties.$setGlobalState = props.setGlobalState
  },
  bootstrap() {
    console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
  },
  unmount() {
    instance!.unmount()
    // @ts-ignore
    instance!._container.innerHTML = ''
    instance = null
  },
  update: function (props: QiankunProps): void | Promise<void> {},
})

function render(props: qiankunHooksProps | {}) {
  const { container } = props as qiankunHooksProps

  instance = createApp(App)
  // instance.use(router)
  instance.use(ElementPlus).mount(container ? container.querySelector('#app')! : '#app')
}
