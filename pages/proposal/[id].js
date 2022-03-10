import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import { Button, Row, Col } from "react-bootstrap"
import ProposalStatus from "../../components/proposal-status"
import imgAvatar from "../../assets/image/avatar.png"
import Account from "../../components/account"
import { formatMoney, datetime2str } from "../../utils"
import Progress from "../../components/progress"

export default function ProposalDetails() {
    
    const router = useRouter()
    const { id } = router.query

    const voteAgree = () => {

    }

    const voteDisagree = () => {

    }

    return (
        <div className="detail-page my-lg-5 my-3">
            <Row className="gy-4">
                <Col xl={8}>
                    <div className="co-card p-4 pt-2 mb-2">
                        <div className="proposal-detail-title">
                            Add the location-80,-57 to the Points of Interest
                        </div>
                        <Row className="gy-2 gx-lg-4">
                            <Col sm='auto'>
                                <ProposalStatus status="Active" />
                            </Col>
                            <Col>
                                <Account prefix="Boson Protocol DAO by " address="0x759dsdfgsdfgsdfdD5A" />
                            </Col>
                        </Row>
                        <div className="proposal-detail-desc my-lg-3 my-2">
                            What would our community like to see more of in 2022 and from the DAO?
                        </div>
                        <div className="d-flex">
                            <Button variant="secondary" className="btn-vote me-3" onClick={voteAgree}>
                                Yes
                            </Button>
                            <Button variant="secondary" className="btn-vote" onClick={voteDisagree}>
                                No
                            </Button>
                        </div>
                    </div>

                    <div className="co-card mb-2">
                        <div className="py-lg-3 py-2 px-lg-4 px-2 d-flex align-items-center">
                            <h3 className="me-2 mb-0">Votes</h3>
                            <div className="vote-badge">10</div>
                        </div>
                        <table className="vote-table">
                            <tr>
                                <td>
                                    <Account address="0x759dsdfgsdfgsdfdD5A" />
                                </td>
                                <td>
                                    Proposal 30
                                </td>
                                <td className="text-end">
                                    Agree 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Account address="0x759dsdfgsdfgsdfdD5A" />
                                </td>
                                <td>
                                    Proposal 30
                                </td>
                                <td className="text-end">
                                    Agree 
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Account address="0x759dsdfgsdfgsdfdD5A" />
                                </td>
                                <td>
                                    Proposal 30
                                </td>
                                <td className="text-end">
                                    Agree 
                                </td>
                            </tr>
                        </table>
                    </div>
                </Col>
                <Col xl={4}>
                    <div className="co-card-secondary mb-2">
                        <div className="co-card-title">Information</div>
                        <div className="co-card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Strategie(S)</div>
                                <div>0</div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Voting System</div>
                                <div>Weighted voting</div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Start date</div>
                                <div>{datetime2str(new Date())}</div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">End date</div>
                                <div>{datetime2str(new Date())}</div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Minted NFTs</div>
                                <div>{formatMoney(10000000)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="co-card-secondary mb-2">
                        <div className="co-card-title">Get Voting</div>
                        <div className="co-card-body">
                            <Progress label="Agree" value={80.5} />
                            <div className="mt-lg-3 mt-2">
                                <Progress label="Disagree" value={19.5} />
                            </div>
                        </div>
                    </div>

                    <div className="co-card-secondary mb-2">
                        <div className="co-card-title">Get Vote Of</div>
                        <div className="co-card-body">
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Not Applied</div>
                                <div>0</div>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <div className="label-vote-status">Accepted</div>
                                <div>0</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="label-vote-status">Rejected</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
