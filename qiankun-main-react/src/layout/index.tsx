import { Tag } from 'antd'

import LayoutSider from './sider'

import { REACT_APP_ENV } from '@/config'

import './index.less'

interface IProps {
  children?: React.ReactNode
}

const ENV_TAG: Record<typeof REACT_APP_ENV, 'green' | 'cyan' | 'orange'> = {
  test: 'green',
  pre: 'cyan',
  prod: 'orange',
}

const MyLayout: React.FC<IProps> = props => {
  return (
    <div className="my-layout">
      <div className="my-layout-header">
        <h1>qiankun-main-react-app</h1>
        {<Tag color={ENV_TAG[REACT_APP_ENV]}>{REACT_APP_ENV}</Tag>}
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
