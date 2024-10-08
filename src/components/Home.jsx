import { Col, Row, Skeleton, Typography } from "antd";
import Statistic from "antd/es/statistic/Statistic";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi.js";
import millify from "millify";
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News.jsx";
import Exchanges from "./Exchanges.jsx";

const Home = () => {
  const { Title } = Typography;
  const { data, isFetching } = useGetCryptosQuery(10);

  if (isFetching)
    return (
      <div>
        <Skeleton active />
        <Row style={{ padding: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Skeleton active />
        <Row style={{ padding: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Skeleton active />
        <Row style={{ padding: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Skeleton active />
        <Row style={{ padding: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Skeleton active />
        <Row style={{ padding: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
      </div>
    );

  const globalStats = data?.data?.stats; // Ensure the path to the data is correct

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats?.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24th Volume"
            value={millify(globalStats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats?.totalMarkets)}
          />
        </Col>
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: 16, marginTop: 10 }}
      >
        <Col className="top-heading">
          <Title level={2}>Top 10 Cryptocurrencies in the World</Title>
        </Col>
        <Col>
          <Title level={3}>
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </Col>
      </Row>
      <Cryptocurrencies simplified />
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: 16, marginTop: 10 }}
      >
        <Col className="top-heading">
          <Title level={2}>Top 10 Cryptocurrency Exchanges</Title>
        </Col>
        <Col>
          <Title level={3}>
            <Link to="/exchanges">Show More</Link>
          </Title>
        </Col>
      </Row>
      <Exchanges simplified />
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: 16, marginTop: 10 }}
      >
        <Col>
          <Title level={2} className="top-heading">
            Latest Crypto News
          </Title>
        </Col>
        <Col>
          <Title level={3}>
            <Link to="/cryptocurrencies">Show More</Link>
          </Title>
        </Col>
      </Row>
      <News simplified />
    </>
  );
};

export default Home;
