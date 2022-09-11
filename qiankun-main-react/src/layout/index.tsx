import './index.less'
import LayoutSider from './sider'

interface IProps {
  children?: React.ReactNode
}

const MyLayout: React.FC<IProps> = props => {
  return (
    <div className="my-layout">
      <div className="my-layout-header">
        <h1>qiankun-main-react-app</h1>
      </div>
      <div className="my-layout-container">
        <div className="my-layout-sider">
          <LayoutSider></LayoutSider>
        </div>
        <div className="my-layout-content">
          <div id="my-layout-content-inner" className="my-layout-content-inner">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyLayout
