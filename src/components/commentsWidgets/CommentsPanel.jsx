import { useState, useEffect } from "react";

import reviews from "../../api/api";

import Loader from "../textNodes/Loader";
import CommentCard from "./CommentCard";

function CommentsPanel({ id, updateVoteCount }) {
  const [commentVisibility, setCommentVisibility] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [requestMade, setRequestMade] = useState(false);

  useEffect(() => {
    if (commentData.length === 0 && !requestMade) {
      reviews.get(`/reviews/${id}/comments`).then(({ data }) => {
        setCommentData(data);
        setIsLoading(false);
        setRequestMade(true);
      });
    }
  }, [commentData, id, requestMade]);

  const handleClick = (event) => {
    event.preventDefault();
    setCommentVisibility(!commentVisibility);
  };

  return (
    <div>
      <button
        aria-expanded={commentVisibility}
        aria-controls="commentsPanel"
        onClick={handleClick}
      >
        View Comments
      </button>
      <div hidden={!commentVisibility} id="commentsPanel">
        {isLoading ? (
          <Loader loaderText={`Loading comments, please wait`} />
        ) : commentData.length > 0 ? (
          <ul>
            {commentData.map((comment) => (
              <CommentCard key={comment.comment_id} comment={comment} />
            ))}
          </ul>
        ) : (
          <div>No comments found</div>
        )}
      </div>
    </div>
  );
}

export default CommentsPanel;
