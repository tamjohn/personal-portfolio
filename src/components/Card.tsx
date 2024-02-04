import React from "react";
import { Col } from "react-bootstrap";

interface CardProps {
    title: string;
    description: string;
    imgUrl?: string;
}

export const Card: React.FC<CardProps> = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}
