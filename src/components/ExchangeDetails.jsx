import React from "react";
import { useGetExchangeDetailsQuery } from "../services/cryptoExchange";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Typography, Table, Skeleton } from "antd";
import millify from "millify";
import moment from "moment";
import "../styles/Exchange.css";
import {
  FacebookFilled,
  RedditSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const TelegramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Telegram"
      role="img"
      viewBox="0 0 512 512"
      height={"28px"}
    >
      <rect width="512" height="512" rx="15%" fill="#37aee2" />
      <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144" />
      <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34" />
      <path
        fill="#f6fbfe"
        d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
      />
    </svg>
  );
};

const ExchangeDetails = () => {
  const { exchangeId } = useParams();
  const {
    data: exchange,
    error,
    isLoading,
  } = useGetExchangeDetailsQuery(exchangeId);
  console.log(exchange);
  if (isLoading)
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
  if (error) return <div>Error: {error.message}</div>;

  const tickerColumns = [
    { title: "Base Currency", dataIndex: "base" },
    { title: "Target Currency", dataIndex: "target" },
    {
      title: "Last Price (USD)",
      dataIndex: ["converted_last", "usd"],
      render: (usd) => <span>{millify(usd)}</span>,
    },
    {
      title: "24h Volume (USD)",
      dataIndex: ["converted_volume", "usd"],
      render: (usd) => <span>{millify(usd)}</span>,
    },
    {
      title: "Bid-Ask Spread (%)",
      dataIndex: "bid_ask_spread_percentage",
      render: (per) => <span>{Number(per).toFixed(4)}</span>,
    },
    {
      title: "Last Traded At",
      dataIndex: "last_traded_at",
      render: (data) => {
        const parsedDate = moment(data);
        if (parsedDate.isValid()) {
          return <span>{parsedDate.format("YYYY-MM-DD HH:mm:ss")}</span>; // Customize the format as needed
        } else {
          return <span>Invalid date format</span>;
        }
      },
    },
    {
      title: "Trade URL",
      dataIndex: "trade_url",
      render: (url) => (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Trade
        </a>
      ),
    },
    {
      title: "Trust Score",
      dataIndex: "trust_score",
      render: (trustScore) => {
        return (
          <div
            style={{
              backgroundColor: trustScore,
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              margin: "auto",
            }}
          ></div>
        );
      },
    },
  ];

  return (
    <div>
      <Typography.Title level={2}>
        <div className="exchage-details-heading">
          {exchange?.name} <img src={exchange?.image} height={"40px"} alt="" />
        </div>
      </Typography.Title>
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Typography.Text strong>Country:</Typography.Text>
            <p>{exchange?.country}</p>
          </Col>
          <Col span={8}>
            <Typography.Text strong>Trade Volume (24h):</Typography.Text>
            <p>{millify(exchange?.trade_volume_24h_btc)}</p>
          </Col>
          <Col span={8}>
            <Typography.Text strong>Year Established</Typography.Text>
            <p>{exchange?.year_established}</p>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Typography.Text strong>Website:</Typography.Text>
            <p>
              <a href={exchange?.url} target="_blank" rel="noopener noreferrer">
                {exchange?.url}
              </a>
            </p>
          </Col>
          <Col span={8}>
            <Typography.Text strong>Social Media:</Typography.Text>
            <div style={{ display: "flex", gap: "5px" }}>
              {exchange?.twitter_handle !== "" && (
                <a href={`https://x.com/${exchange?.twitter_handle}`}>
                  <TwitterSquareFilled
                    style={{ color: "#1da1f2", fontSize: "30px" }}
                  />
                </a>
              )}
              {exchange?.facebook_url !== "" && (
                <a href={`${exchange?.facebook_url}`}>
                  <FacebookFilled style={{ color: "blue", fontSize: "30px" }} />
                </a>
              )}
              {exchange?.reddit_url !== "" && (
                <a href={`${exchange?.reddit_url}`}>
                  <RedditSquareFilled
                    style={{ color: "#FF5700", fontSize: "30px" }}
                  />
                </a>
              )}
              {exchange?.telegram_url !== "" && (
                <a href={`${exchange?.reddit_url}`}>
                  <TelegramIcon
                    style={{
                      color: "#FF5700",
                      height: "30px",
                      width: "28px",
                    }}
                  />
                </a>
              )}
            </div>
          </Col>
          <Col span={8}>
            <Typography.Text strong>Trust Score:</Typography.Text>
            <p>{exchange?.trust_score_rank}</p>
          </Col>
        </Row>
      </Card>
      <Typography.Title level={3} style={{ margin: "20px 0px" }}>
        Description
      </Typography.Title>
      <Typography.Paragraph
        style={{
          textAlign: "justify",
          color: "gray",
          fontSize: "16px",
        }}
      >
        {exchange?.description}
      </Typography.Paragraph>
      <Typography.Title level={3}>
        Exchange with other Cryptocurrencies
      </Typography.Title>
      <Table dataSource={exchange?.tickers} columns={tickerColumns} />
    </div>
  );
};

export default ExchangeDetails;
