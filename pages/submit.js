import React, {useState, useEffect} from "react"
import imgWall from "../assets/image/submit-wall.jpg"
import { Button } from "react-bootstrap"

export default function Submit(props) {
    const [question, setQuestion] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {

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

            <Button variant="secondary" onClick={handleSubmit}>
                Submit Proposals
            </Button>
        </div>
    )
}
