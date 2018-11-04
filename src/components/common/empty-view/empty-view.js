import React from 'react';


export const EmptyView = (props) => {
  return(
    <div className="empty-state-wrapper">
      <div className="no-data-text">{props.field}</div>
    </div>      
  )
}
