import DeleteCommentButton from "./DeleteCommentButton";

function CommentCard({ comment, user, setDeletedComment }) {
  return (
    <li>
      {comment.author}: {comment.body} -- {comment.votes} votes
      {comment.author === user && (
        <DeleteCommentButton
          comment_id={comment.comment_id}
          setDeletedComment={setDeletedComment}
        />
      )}
    </li>
  );
}

export default CommentCard;
