import React from "react"
import Image from "next/image"
import { Button, Row, Col } from "react-bootstrap";
import RecentProposal from "../recent-proposal";

const SectionRecent = () => {
    return (
	    <section className="section-recent">
            <h1 className="text-center">Recent Passed Proposal</h1>
            <Row className="gy-3 gx-4">
                <Col lg={4}>
                    <RecentProposal />
                </Col>
                <Col lg={4}>
                    <RecentProposal />
                </Col>
                <Col lg={4}>
                    <RecentProposal />
                </Col>
            </Row>
		</section>
    );
  };
  
  export default SectionRecent;
  