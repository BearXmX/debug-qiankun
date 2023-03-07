declare type qiankunHooksProps = {
  container: HTMLElement | DocumentFragment
  name: string
  myInject: {
    projectName: string
  }
  useParentRouter: import('react-router-dom').NavigateFunction
}

declare interface Window {
  __POWERED_BY_QIANKUN__: boolean
  useParentRouter: import('react-router-dom').NavigateFunction
}
