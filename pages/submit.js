import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'
import imgWall from "../assets/image/submit-wall.jpg"
import { Button, Spinner } from "react-bootstrap"
import { notificationWarning, notificationSuccess, notificationDanger } from "../utils/notification"
import ProposalApi from "../api/ProposalApi"
import useWeb3 from "../shared/hooks/useWeb3"
import useContracts from "../shared/hooks/useContracts"

export default function Submit(props) {
    const router = useRouter()
    const [question, setQuestion] = useState('')
    const [description, setDescription] = useState('')

    const [pending, setPending] = useState(false)
    const { connected, walletAddress, handleConnect } = useWeb3()
    const { startVoting } = useContracts()

    const handleSubmit = () => {
        if(!connected) {
            return handleConnect()
        }
        if(!walletAddress) return;

        if(question.length === 0) {
            return notificationWarning("Please input question")
        }

        if(description.length === 0) {
            return notificationWarning("Please input description")
        }
        setPending(true)
        
        startVoting(question).then((result) => {
            if(result){
                ProposalApi.createProposal(walletAddress, question, description)
                .then((resp) => {
                    setPending(false)
                    if(resp.data?.success) {
                        notificationSuccess("Success to submit proposal")
                        router.push(`proposal/${resp.data.proposal.id}`)
                    } else {
                        notificationDanger("Failed to submit proposal")    
                    }
                })
                .catch((error) => {
                    setPending(false)
                    notificationDanger("Failed to submit proposal")    
                })
            } else {
                setPending(false)
                notificationDanger("Failed to submit proposal")    
            }
        })
        .catch((e) => {
            setPending(false)
            notificationDanger("Canceled to submit proposal")    
        })
    }

    return (
        <div className="submit-page mb-5">
            <img src={imgWall} className="submit-wall-image"/>
            <div className="input-label mb-lg-4 mb-1">The question You Would like to ask the community.</div>
            <input 
                className="co-input" 
                placeholder="Enter Your question here"
                maxLength={200}  
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <div className="input-status mt-lg-4 mt-2 mb-lg-1 mb-3 ">
                ({question.length} out of 200 characters)
            </div>
            <div className="">
                <div className="input-label mb-1">Description(markdawn)</div>
                <div className="mb-lg-4 mb-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </div>
            </div>
            <textarea
                className="co-textarea"
                placeholder="A brief description of your question."
                maxLength={7000}
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="input-status mt-lg-4 mt-2 mb-lg-1 mb-3 ">
                ({description.length} out of 7000 characters)
            </div>

            <Button variant="secondary" onClick={handleSubmit} disabled={pending}>
                <span>Submit Proposals</span>
                {pending && 
                <Spinner animation="border" role="status" size="sm" className="ms-1">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                }
            </Button>
        </div>
    )
}
