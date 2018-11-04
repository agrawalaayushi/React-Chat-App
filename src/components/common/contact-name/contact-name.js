import React from 'react';


export const ContactName = (props) => {
  const {friend} = props;

  return(
    <div className="friend-name-wrapper" >
      <div className="profile-image"></div>
      <div className="friend-name"><span>{friend.userName}</span></div>
    </div>    
  )
}
