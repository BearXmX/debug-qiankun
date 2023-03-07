import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import logo from './logo.svg'

const routes = [
  {
    name: '跳转当前微应用 => /qian-sub1-react',
    path: '/qiankun-sub1-react',
  },
  {
    name: '跳转当前微应用 => /qian-sub1-react/other-route',
    path: '/qiankun-sub1-react/other-route',
  },
  {
    name: '跳转其他微应用 => /qian-sub-react',
    path: '/qiankun-sub-react',
  },
  {
    name: '跳转其他微应用 => qian-sub-react/other-route',
    path: '/qiankun-sub-react/other-route',
  },
]

const OtherRouteSonComponent: React.FC = () => {
  const historyPush = useNavigate()

  return (
    <div style={{ margin: '16px' }}>
      {routes.map(item => {
        return (
          <span
            key={item.path}
            style={{ marginRight: 20, cursor: 'pointer' }}
            onClick={() => {
              // history.pushState
              window.history.pushState(null, '', item.path)
              // location.href
              // window.location.href = item.path
              // useNavigate
              // historyPush(item.path)
              // parent router
              // window.useParentRouter(item.path)
            }}
          >
            {item.name}
          </span>
        )
      })}
    </div>
  )
}

const OtherRouteComponent: React.FC = () => {
  return (
    <>
      <OtherRouteSonComponent></OtherRouteSonComponent>
      <h1 style={{ margin: '0 auto', color: 'red', fontSize: 18, marginTop: 30, textAlign: 'center' }}>qiankun sub1 react app OtherRouteComponent</h1>
      <img style={{ display: 'block', width: 200, height: 200, margin: '0 auto' }} src={logo} alt="" />
    </>
  )
}

const AppComponent: React.FC = () => {
  return (
    <>
      <OtherRouteSonComponent></OtherRouteSonComponent>
      <h1 style={{ margin: '0 auto', color: 'red', fontSize: 18, marginTop: 30, textAlign: 'center' }}>qiankun sub1 react app AppComponent</h1>
      <img style={{ display: 'block', width: 200, height: 200, margin: '0 auto' }} src={logo} alt="" />
    </>
  )
}

const RouteComponent: React.FC = () => {
  return (
    <div className="react-sub1-app">
      <BrowserRouter>
        <Routes>
          <Route key={1} path="qiankun-sub1-react" element={<AppComponent></AppComponent>}></Route>
          <Route key={3} path="/qiankun-sub1-react/other-route" element={<OtherRouteComponent></OtherRouteComponent>}></Route>
          <Route key={2} path="/" element={<Navigate to={'qiankun-sub1-react'}></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComponent
