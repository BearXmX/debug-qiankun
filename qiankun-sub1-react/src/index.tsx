import ReactDOM from 'react-dom/client'
import RouteComponent from './App'

import './index.css'
import './public-path'

let root: ReactDOM.Root

function render(props: any) {
  const { container } = props
  console.log(props)
  root = ReactDOM.createRoot(container ? container.querySelector('#root') : (document.querySelector('#root') as HTMLElement))

  root.render(<RouteComponent />)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react18] qiankun-sub1-react-app bootstraped')
}

export async function mount(props: qiankunHooksProps) {
  console.log('sub1 qiankun props', props)
  window.useParentRouter = props.useParentRouter
  render(props)
}

export async function unmount() {
  root.unmount()
}
