import React from "react"

const ProposalStatus = ({
    status
}) => {
    return (
	    <div className="proposal-status-tag text-center">
            {status}        
        </div>
    );
};
  
export default ProposalStatus;
  