import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import './public-path'

let root: ReactDOM.Root

function render(props: any) {
  const { container } = props

  root = ReactDOM.createRoot(container ? container.querySelector('#root') : (document.querySelector('#root') as HTMLElement))

  root.render(<App />)
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react18] qiankun-sub-react-app bootstraped')
}

export async function mount(props: qiankunHooksProps) {
  console.log(props)
  render(props)
}

export async function unmount() {
  root.unmount()
}
