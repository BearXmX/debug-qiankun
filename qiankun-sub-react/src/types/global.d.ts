declare type qiankunHooksProps = {
  container: HTMLElement | DocumentFragment
  name: string
  myInject: {
    projectName: string
  }
}

declare interface Window {
  __POWERED_BY_QIANKUN__: boolean
}
