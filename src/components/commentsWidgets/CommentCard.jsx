function CommentCard({comment}) {
  return <li>{comment.author}: {comment.body} -- {comment.votes} votes</li>
}

export default CommentCard;