// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

const Comment = props => {

   const userStyle = {
     marginLeft: '0'
   };

   return (
    <div className="comment-text">
      <span className="user" style={userStyle}>{props.comment.username}</span>
      {' '}
      <span className="comment" >{props.comment.text}</span>
    </div>
   );
};


export default Comment;
