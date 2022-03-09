import React, { useState } from "react"
import Image from "next/image"
import { Button, Row, Col } from "react-bootstrap";
import Proposal from "../proposal";
import Pagination from "../pagination";

const SectionProposal = () => {

    const [page, setPage] = useState(1)

    return (
	    <section className="section-proposal">
            <Button variant="secondary" className="float-end">Submit</Button>
            <h1 className="text-center">Proposal</h1>

            <Proposal title="Add the location-80,-57 to the Points of Interest" leading={true} status="Active"/>
            <Proposal title="Manhattan Developer Group DAO" leading={true} status="Rejected"/>
            <Proposal title="Add the location-80,-57 to the Points of Interest" leading={true} status="Passed"/>
            
            <div className="d-flex justify-content-center">
                <Pagination page={page} pages={10} />
            </div>
		</section>
    );
  };
  
  export default SectionProposal;
  