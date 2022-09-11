import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'

import logo from './logo.svg'

const routes = [
  {
    name: 'main-route',
    path: '/qiankun-sub-react',
  },
  {
    name: 'other-route',
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
              historyPush(item.path)
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
      <h1 style={{ margin: '0 auto', color: 'red', fontSize: 18, marginTop: 30, textAlign: 'center' }}>qiankun sub react app OtherRouteComponent</h1>
      <img style={{ display: 'block', width: 200, height: 200, margin: '0 auto' }} src={logo} alt="" />
    </>
  )
}

const AppComponent: React.FC = () => {
  return (
    <>
      <OtherRouteSonComponent></OtherRouteSonComponent>
      <h1 style={{ margin: '0 auto', color: 'red', fontSize: 18, marginTop: 30, textAlign: 'center' }}>qiankun sub react app AppComponent</h1>
      <img style={{ display: 'block', width: 200, height: 200, margin: '0 auto' }} src={logo} alt="" />
    </>
  )
}

const RouteComponent: React.FC = () => {
  return (
    <div className="react-sub-app">
      <BrowserRouter>
        <Routes>
          <Route key={3} path="/qiankun-sub-react/other-route" element={<OtherRouteComponent></OtherRouteComponent>}></Route>
          <Route key={2} path="/" element={<Navigate to={'qiankun-sub-react'}></Navigate>}></Route>
          <Route key={1} path="qiankun-sub-react" element={<AppComponent></AppComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouteComponent
