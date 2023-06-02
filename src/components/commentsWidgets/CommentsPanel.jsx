import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user";

import reviews from "../../api/api";

import Loader from "../textNodes/Loader";
import CommentCard from "./CommentCard";
import NewCommentForm from "./NewCommentForm";

function CommentsPanel({ id }) {
  const { user } = useContext(UserContext);
  const [commentVisibility, setCommentVisibility] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [submittedComment, setSubmittedComment] = useState("");
  const [deletedComment, setDeletedComment] = useState("");

  useEffect(() => {
    if (isButtonClicked) {
      setIsLoading(true);
      reviews.get(`/reviews/${id}/comments`).then(({ data }) => {
        setCommentData(data);
        setIsLoading(false);
      });
    }
  }, [isButtonClicked, submittedComment, deletedComment]);

  const handleClick = (event) => {
    event.preventDefault();
    setIsButtonClicked(true);
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
          <>
            <Loader loaderText={`${commentData.length} comments found`} />
            <ul>
              {commentData.map((comment) => (
                <CommentCard
                  key={comment.comment_id}
                  comment={comment}
                  submittedComment={submittedComment}
                  user={user.username}
                  setDeletedComment={setDeletedComment}
                />
              ))}
            </ul>
          </>
        ) : (
          <div>No comments found</div>
        )}
        <NewCommentForm
          id={id}
          setSubmittedComment={setSubmittedComment}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default CommentsPanel;
