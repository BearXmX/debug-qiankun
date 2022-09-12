declare interface IProps {
  name: string
  age: number
}

/** @use 给每个对象类型增加 null类型 */
declare type MapNullToProperty<T> = {
  [P in keyof T]: T[P] | null
}

declare interface ICurrentUser {
  userName: string
  userId: number
}

/** @description 注释1 */

/** @description 注释2 */

/** @description 注释3 */

/** @description 注释4 */

/** @description 注释5 */

/** @description 注释6 */

declare function A(params: string): string[]
declare function A(params: number): number[]

declare type qiankunHooksProps = {
  container: HTMLElement | DocumentFragment
  name: string
  onGlobalStateChange: () => any
  setGlobalState: () => any
  myInject: {
    projectName: string
  }
}

declare interface Window {
  __POWERED_BY_QIANKUN__: boolean
}
