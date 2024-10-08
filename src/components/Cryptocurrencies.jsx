import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Col, Row, Skeleton } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import { Input } from "antd";
import "../styles/CryptoCurrencies.css";

const { Search } = Input;

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const [search, setSearch] = useState("");
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  // const [cryptos, setCryptos] = useState();
  console.log(cryptosList?.data?.coins);
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
      </>
    );
  const onSearch = (value, _e, info) => {
    console.log(value, info);
    setSearch(value);
  };
  return (
    <>
      {!simplified && (
        <Row justify="center" style={{ margin: "20px 0px" }}>
          <Col>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              className="crypto-search-button"
              allowClear
            />
          </Col>
        </Row>
      )}
      <Row gutter={[32, 32]}>
        {cryptosList?.data?.coins
          .filter((coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((currency) => (
            <Col xs={24} sm={12} lg={6} key={currency.id}>
              <Link to={`/crypto/${currency.uuid}`}>
                <Card
                  className="crypto-card"
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img className="crypto-logo" src={currency.iconUrl} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
