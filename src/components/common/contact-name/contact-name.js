import React from 'react';


export const ContactName = (props) => {
  const {friend} = props;

  return(
    <div className="friend-name-wrapper" key={friend.id.toString()}>
      <div className="profile-image"></div>
      <div className="friend-name"><span>{friend.userName}</span></div>
    </div>    
  )
}
