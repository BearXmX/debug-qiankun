import { useNavigate } from 'react-router-dom'

import { registerMicroApps, start } from 'qiankun'
import MyLayout from '@/layout'
import { useEffect } from 'react'

const App: React.FC = () => {
  const push = useNavigate()

  useEffect(() => {
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
        name: 'qiankun-sub1-react-app', // app name registered
        entry: '//localhost:8082',
        container: '#my-layout-content-inner',
        activeRule: '/qiankun-sub1-react',
        props: {
          myInject: {
            projectName: 'qiankun-sub1-react-app',
          },
          useParentRouter: push,
        },
      },
      {
        name: 'qiankun-sub-vue-app', // app name registered
        entry: '//localhost:8083',
        container: '#my-layout-content-inner',
        activeRule: '/qiankun-sub-vue',
        props: {
          myInject: {
            projectName: 'qiankun-sub-vue-app',
          },
        },
      },
    ])
  }, [])
  return (
    <div className="qiankun-main-App">
      <MyLayout></MyLayout>
    </div>
  )
}

start()

export default App
