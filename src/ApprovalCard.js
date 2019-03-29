import React from 'react';

const ApprovalCard = (props) => {
  console.log(props);
  return(
    <div className="ui card">
      <div className="context">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Rejects</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard;
