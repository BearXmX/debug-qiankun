import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { registerMicroApps, start } from 'qiankun'
import MyLayout from '@/layout'

registerMicroApps([
  {
    name: 'qiankun-sub-react-app', // app name registered
    entry: '//localhost:8081',
    container: '#my-layout-content-inner',
    activeRule: '/qiankun-sub-react',
    props: {
      myInject: {
        projectName: 'qiankun-sub-react-app',
      },
    },
  },
  {
    name: 'qiankun-sub-vue-app', // app name registered
    entry: '//localhost:8082',
    container: '#my-layout-content-inner',
    activeRule: '/qiankun-sub-vue',
    props: {
      myInject: {
        projectName: 'qiankun-sub-vue-app',
      },
    },
  },
])

const App: React.FC = () => {
  return (
    <div className="qiankun-main-App">
      <BrowserRouter>
        <MyLayout>
          <Routes>
            <Route key={1} path={'/'} element={<Navigate to="/qiankun-sub-react" />}></Route>
          </Routes>
        </MyLayout>
      </BrowserRouter>
    </div>
  )
}

start()

export default App
