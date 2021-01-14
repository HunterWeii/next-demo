import { Button, Layout, Menu } from "antd";
import {
  UserOutlined,
} from '@ant-design/icons';

const {
  Header,
  Sider,
  Content
} = Layout;

export default function index() {
  return (
    <Layout>
      <Sider

        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: '100vh' }}
      >
        <div style={{ height: '60px' }}></div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Invoice Generator
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Config
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
        </Header>
        <Content>
          dafuq
        </Content>
      </Layout>
    </Layout>
  )
}