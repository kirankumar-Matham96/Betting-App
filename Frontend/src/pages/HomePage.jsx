// import React from "react";

// const HomePage = () => {
//   return (
//     <div >
//       <h1>Welcome to Bettings App</h1>
//       <p>Bet Smart, Win Big – Your Ultimate Betting Arena!</p>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Layout, Button, Typography, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <Layout>
      {/* Header */}
      <Header style={{ background: "#1890ff", padding: "10px 50px" }}>
        <Title level={3} style={{ color: "#fff", margin: 0 }}>
          Betting App
        </Title>
      </Header>

      {/* Hero Section */}
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}>Bet Smart, Win Big!</Title>
        <Paragraph>
          Join now and experience the thrill of betting with fairness and
          security.
        </Paragraph>

        <Link to="/register">
          <Button type="primary" size="large" style={{ marginRight: 10 }}>
            Get Started
          </Button>
        </Link>
        <Link to="/login">
          <Button size="large">Login</Button>
        </Link>
      </Content>

      {/* Features Section */}
      <Content style={{ padding: "50px" }}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card title="Secure Betting" bordered={false}>
              Enjoy a fair and secure betting experience with our advanced
              security features.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Instant Payouts" bordered={false}>
              Get your winnings instantly credited to your wallet.
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card title="Exciting Games" bordered={false}>
              Bet on a variety of thrilling games and events.
            </Card>
          </Col>
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        Betting App ©{new Date().getFullYear()} - All Rights Reserved
      </Footer>
    </Layout>
  );
};

export default HomePage;
