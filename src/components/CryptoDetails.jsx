import { Card, Col, Row, Select, Skeleton, Typography } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import {
  CheckOutlined,
  DollarCircleOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  NumberOutlined,
  StopOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import millify from "millify";
import "../styles/CryptoDetails.css";
import LineChart from "./LineChart";
const CryptoDetails = () => {
  const { Title, Text } = Typography;
  const { Option } = Select;
  const { coinId } = useParams();
  const [timeperiod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  console.log(data, coinHistory);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${
        cryptoDetails?.price && cryptoDetails?.price < 1
          ? Number(cryptoDetails?.price).toFixed(4)
          : millify(cryptoDetails?.price)
      }`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${
        cryptoDetails &&
        cryptoDetails["24hVolume"] &&
        millify(cryptoDetails["24hVolume"])
      }`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        cryptoDetails?.allTimeHigh?.price < 1
          ? Number(cryptoDetails?.allTimeHigh?.price).toFixed(4)
          : millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  if (isFetching)
    return (
      <>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={6} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={6} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={6} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={6} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={24} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>

          <Col span={12} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={24} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
      </>
    );
  return (
    <Col>
      <Card className="card crypto-details">
        <Title
          level={1}
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            justifyContent: "space-between",
          }}
        >
          <img src={`${cryptoDetails?.iconUrl}`} alt="" height={"80px"} />
          <div>
            {cryptoDetails?.name}{" "}
            <span
              style={{ color: `${cryptoDetails?.color}`, marginLeft: "10px" }}
            >
              {cryptoDetails?.symbol}
            </span>
          </div>
        </Title>
        <Title
          level={4}
          style={{ color: "#888", marginTop: "10px", fontWeight: "normal" }}
        >
          {cryptoDetails?.description}
        </Title>
        <p style={{ fontSize: "16px", marginTop: "15px", lineHeight: "1.6" }}>
          {cryptoDetails?.name} live price in US dollar. View value statistics,
          market cap, and supply.
        </p>
        <div className="live-graph">
          <Select
            defaultValue={"7d"}
            placeholder={" Select Time Period"}
            onChange={(val) => setTimePeriod(val)}
            style={{ minWidth: "150px", marginTop: "20px" }}
          >
            {time &&
              time.map((option) => <Option key={`${option}`}>{option}</Option>)}
          </Select>

          <LineChart
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDetails?.price)}
            coinName={cryptoDetails?.name}
          />
        </div>
        <sub className="live-graph-mob">
          <span style={{ color: "red" }}>*</span>graph is not available in
          mobile view, please switch to bigger screen device.
        </sub>
      </Card>

      <Card className="stats-card card">
        <Row justify={"space-around"}>
          <Col className="stats-coin">
            <Title level={2}>{cryptoDetails.name} Value Statistics</Title>
            <p>An overall showing the stats of {cryptoDetails.name}</p>
            {stats.map(({ icon, title, value }) => {
              return (
                <Col className="stats-desc">
                  <Col className="stats-desc-title">
                    <Text style={{ fontSize: "15px" }}>{icon}</Text>
                    <Text style={{ fontSize: "15px" }}>{title}</Text>
                  </Col>
                  <Text style={{ fontSize: "15px" }}>{value}</Text>
                </Col>
              );
            })}
          </Col>
          <Col className="stats-coin">
            <Title level={2}> Other Statistics</Title>
            <p>An overall showing the stats of all cryptocurrencies</p>
            {genericStats.map(({ icon, title, value }) => {
              return (
                <Col className="stats-desc">
                  <Col className="stats-desc-title">
                    <Text style={{ fontSize: "15px" }}>{icon}</Text>
                    <Text style={{ fontSize: "15px" }}>{title}</Text>
                  </Col>
                  <Text style={{ fontSize: "15px" }}>{value}</Text>
                </Col>
              );
            })}
          </Col>
        </Row>
      </Card>
      <Card className="coin-links card">
        <Title level={3} className="coin-details-heading">
          {cryptoDetails.name} Links
        </Title>
        {cryptoDetails.links?.map((link) => (
          <Row className="coin-link" key={link.name}>
            <Title level={5} className="link-name">
              {link.type}
            </Title>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </Row>
        ))}
      </Card>
    </Col>
  );
};

export default CryptoDetails;
