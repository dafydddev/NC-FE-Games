import reviews from "../../api/api";
import { useState } from "react";

function DeleteCommentButton({ comment_id, setDeletedComment }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleClick = () => {
    setIsDeleting(true);
    reviews.delete(`/comments/${comment_id}`).then(() => {
      setDeletedComment(comment_id);
      setIsDeleting(false);
    });
  };
  return <button onClick={handleClick} disabled={isDeleting}>Delete</button>;
}

export default DeleteCommentButton;
