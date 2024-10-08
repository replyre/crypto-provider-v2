import React from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNews";
import { Card, Col, Flex, Row, Select, Skeleton, Typography } from "antd";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const getTime = (raw) => {
  // Given date and time string
  const givenTimeStr = raw;

  // Convert the string to a Date object
  const givenTime = new Date(givenTimeStr);

  // Get the current time
  const currentTime = new Date();

  // Calculate the difference in milliseconds
  const timeDiff = currentTime - givenTime;

  // Calculate the total number of days and hours passed
  const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Days
  const hoursPassed = Math.floor(timeDiff / (1000 * 60 * 60)); // Total hours
  return daysPassed >= 1
    ? daysPassed == 1
      ? daysPassed + "day"
      : daysPassed + "days"
    : hoursPassed == 1
    ? hoursPassed + "hr"
    : hoursPassed + "hrs";
};

const News = ({ simplified }) => {
  const [newsCategory, setnewsCategory] = useState("cryptocurrency");
  const { data: cryptosList } = useGetCryptosQuery(100);

  const tempImg =
    "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg";
  const { data: cryptoNews } = useGetCryptoNewsQuery(newsCategory);
  console.log(cryptoNews);
  if (!cryptoNews?.results)
    return (
      <>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>

          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>

          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>

          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
        <Row style={{ padding: "10px", marginTop: "10px" }}>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>

          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
          <Col span={8} style={{ padding: "10px" }}>
            <Skeleton active />
          </Col>
        </Row>
      </>
    );
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(e) => {
              setnewsCategory(e);
            }}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Select.Option value="CryptoCurrency">CryptoCurrency</Select.Option>
            {cryptosList?.data?.coins.map((coin) => (
              <Select.Option value={coin.name}>{coin.name}</Select.Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews.results.map((news, i) => {
        if (i >= 6 && simplified) return;
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable>
              <a href={news.link} target="_blank">
                <Row align="middle" gutter={[16, 16]}>
                  <Col xs={24} sm={16} md={14}>
                    <Typography.Title level={5}>{news.title}</Typography.Title>
                  </Col>
                  <Col xs={24} sm={8} md={8} style={{ textAlign: "center" }}>
                    <img
                      src={news?.image_url || tempImg}
                      alt={news.title}
                      height={"100px"}
                      // width={"200px"}
                      style={{
                        width: "auto",

                        maxWidth: "100%",
                        borderRadius: "5px",
                        position: "relative",
                      }}
                    />
                  </Col>
                </Row>
                <p style={{ color: "black" }}>
                  {news?.description?.length > 150
                    ? `${news?.description.substring(0, 100)}...`
                    : news?.description}
                </p>
              </a>
              <Flex justify="space-between" style={{ marginTop: "10px" }}>
                <a
                  href={news.source_url}
                  target="_blank"
                  style={{
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={news?.source_icon} alt="" height={"20px"} />
                  {news?.source_name}
                </a>

                {getTime(news?.pubDate)}
              </Flex>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default News;
