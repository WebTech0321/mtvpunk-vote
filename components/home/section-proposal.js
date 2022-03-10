import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, Row, Col } from "react-bootstrap";
import Proposal from "../proposal";
import Pagination from "../pagination";

const SectionProposal = () => {

    const [page, setPage] = useState(1)

    return (
	    <section id="section-vote" className="section-proposal">
            <Link href="/submit">
              <Button variant="secondary" className="float-end">Submit</Button>
            </Link>
            <h1 className="text-center">Proposal</h1>
            
            <Link href={`/proposal/${1}`}>
              <a>
                <Proposal title="Add the location-80,-57 to the Points of Interest" leading={true} status="Active"/>
              </a>
            </Link>
            <Link href={`/proposal/${2}`}>
              <a>
                <Proposal title="Manhattan Developer Group DAO" leading={true} status="Rejected"/>
              </a>
            </Link>
            <Link href={`/proposal/${3}`}>
              <a>
                <Proposal title="Add the location-80,-57 to the Points of Interest" leading={true} status="Passed"/>
              </a>
            </Link>
            
            <div className="d-flex justify-content-center">
                <Pagination page={page} pages={10} />
            </div>
		</section>
    );
  };
  
  export default SectionProposal;
  