import { useNavigate } from 'react-router-dom'

const siderList = [
  {
    name: 'qiankun-sub-react',
    path: 'qiankun-sub-react',
  },
  {
    name: 'qiankun-sub-vue',
    path: 'qiankun-sub-vue',
  },
]

const LayoutSider: React.FC = () => {
  const history = useNavigate()
  return (
    <>
      {siderList.map(item => {
        return (
          <div
            key={item.name}
            className={`my-layout-sider-item ${window.location.pathname.includes(item.path) ? 'my-layout-sider-item-active' : ''}`}
            onClick={() => history(item.path)}
          >
            {item.name}
          </div>
        )
      })}
    </>
  )
}

export default LayoutSider
