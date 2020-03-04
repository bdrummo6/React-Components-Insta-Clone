// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
   // Add state for the comments
   const [comments, setComments] = useState(props.comments);
   const [nextComment, setNextComment] = useState('');

   const submitComment = (e) => {
      e.preventDefault();

      // Stretch: Implemented the ability to comment on a post with the `Add a comment...` input
      let comment = '';

      if(nextComment === '') {
         comment ='Add a comment...';
      } else {
         comment = nextComment;
      }
      const newComment = {
         username: 'Anonymous',
         text: comment
      };

      setComments([...comments, newComment]);

   };

   const changeComment = (e) => {
      setNextComment(e.target.value);
   };

   return (
      <div>
         {/* map through the comments data and return the Comment component */}
         {comments.map((comment, index) => (
            <Comment key={props.postId + index} comment={comment} />
         ))}
         <CommentInput
            nextComment={nextComment}
            setNextComment={setNextComment}
            changeComment={changeComment}
            submitComment={submitComment}
         />
      </div>
   );
};

export default CommentSection;
