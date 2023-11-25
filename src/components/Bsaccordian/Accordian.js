import React from "react";
import { Accordion } from "react-bootstrap";
import "./Bsaccordian.css";

const BsAccordian = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-5 p-3">
      <Accordion.Item eventKey="0" className="item">
        <Accordion.Header>
          Can Place order without waiter app ?
        </Accordion.Header>
        <Accordion.Body>
          This is due thkfjals lkdsfnls lkfnsdf lkfnls dlkfnalsd
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="item">
        <Accordion.Header>
          Can I order directly from waiter app without QR menu. ?
        </Accordion.Header>
        <Accordion.Body>Lorem iPSUM</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="item">
        <Accordion.Header>
          What are the device requirements to use Sajha Menu
        </Accordion.Header>
        <Accordion.Body>Lorem iPSUM</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className="item">
        <Accordion.Header>How to create QR code menu</Accordion.Header>
        <Accordion.Body>Lorem iPSUM</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5" className="item">
        <Accordion.Header>How long will it take to set up</Accordion.Header>
        <Accordion.Body>Lorem iPSUM</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default BsAccordian;
