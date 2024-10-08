import React, { useState } from "react";
import {
  Button,
  Menu,
  Typography,
  Avatar,
  Drawer,
  Row,
  Col,
  Badge,
} from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "../styles/Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Function to show/hide the drawer
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="nav-container">
      <Drawer
        // title="Crypto Provider V2"
        placement="right"
        onClose={onClose}
        open={visible}
        style={{ background: "#001529" }}
      >
        <div className="logo-container">
          <Row align="middle" justify="space-between" gutter={16}>
            <Col>
              <Avatar size="large" src="./logo.png" />
            </Col>
            <Col flex="auto">
              <Typography.Title
                level={4}
                className="logo"
                style={{ margin: 0 }}
              >
                <Link to="/" style={{ width: "fit-content" }}>
                  <Badge.Ribbon
                    text="v2"
                    style={{ marginTop: "-20px" }}
                  ></Badge.Ribbon>
                  Crypto Provider
                </Link>
              </Typography.Title>
            </Col>
          </Row>
        </div>
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/" onClick={() => onClose()}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies" onClick={() => onClose()}>
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges" onClick={() => onClose()}>
              Exchanges
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news" onClick={() => onClose()}>
              News
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
      <div className="menu-mobile">
        <div className="logo-container">
          <Row align="middle" justify="space-between" gutter={16}>
            <Col>
              <Avatar size="large" src="./logo.png" />
            </Col>
            <Col>
              <Button
                className="menu-control-container"
                onClick={showDrawer}
                type="primary"
                icon={<MenuOutlined />}
              />
            </Col>
          </Row>
        </div>
      </div>

      {/* Regular horizontal navigation for larger screens */}
      <div className="menu-desktop">
        <Menu
          mode="vertical"
          theme="dark"
          style={{ height: "100vh" }}
          defaultSelectedKeys={["/"]}
        >
          <div className="logo-container">
            <Row align="middle" justify="space-between" gutter={16}>
              <Col>
                <Avatar size="large" src="./logo.png" />
              </Col>
              <Col flex="auto">
                <Typography.Title
                  level={2}
                  className="logo"
                  style={{ margin: 0 }}
                >
                  <Link to="/">
                    <Badge.Ribbon
                      text="v2"
                      style={{ marginTop: "-20px" }}
                    ></Badge.Ribbon>
                    Crypto Provider
                  </Link>
                </Typography.Title>
              </Col>
            </Row>
          </div>

          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/cryptocurrencies" icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item key="/exchanges" icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item key="/news" icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
