
const CommentList = ({ comments }) => {

console.log('Rendering CommentList with comments:', comments);

  
  const renderedComments = comments && comments.map((comment) => {
     let content = 'No comments yet';

   if(comment.status === 'approved') {
    content = comment.content;
   } else if (comment.status === 'rejected') {
    content = 'Comment rejected';
   } else if (comment.status === 'pending') {
    content = 'Comment pending moderation';
   }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
