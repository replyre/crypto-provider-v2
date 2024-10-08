import React, { useState } from "react";
import { Card, Row, Col, Skeleton, Input } from "antd";
import { useGetExchangesQuery } from "../services/cryptoExchange";
import millify from "millify";
import "../styles/Exchange.css";
import { Link } from "react-router-dom";
const Exchanges = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: exchanges, error, isLoading } = useGetExchangesQuery(count);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input

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
  if (error) return <div>Error: {error.message}</div>;

  const filteredExchanges = exchanges.filter((exchange) =>
    exchange.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {!simplified && (
        <Input
          placeholder="Search exchanges"
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          style={{ marginBottom: "20px", padding: "5px" }}
          allowClear
        />
      )}

      {/* Display Exchange Cards */}
      <Row gutter={[16, 16]}>
        {filteredExchanges.map((exchange) => (
          <Col xs={24} sm={12} md={8} lg={6} key={exchange.id}>
            <Link to={`/exchange/${exchange.id}`}>
              <Card
                hoverable
                title={
                  <div className="exchange-title">
                    {exchange.name}{" "}
                    <img
                      alt={exchange.name}
                      src={exchange.image}
                      height={"30px"}
                    />
                  </div>
                }
              >
                <p>
                  <strong>Country:</strong> {exchange.country || "N/A"}
                </p>
                {!simplified && (
                  <p>
                    <strong>Trust Rank:</strong> {exchange.trust_score_rank}
                  </p>
                )}
                <p>
                  <strong>24h Trade Volume (BTC):</strong>{" "}
                  {millify(exchange.trade_volume_24h_btc)}
                </p>
                <a
                  href={exchange.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Exchange
                </a>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Exchanges;
