import { parseDate } from "../../utils/parseDate";
import { Link } from "react-router-dom";

function ReviewCard({ review }) {
  return (
    <>
      <h2>{review.title} Review</h2>
      <Link to={`/reviews/${review.review_id}`}>{`${review.title}`}</Link>
      <ul>
        <li>Created at: {parseDate(review.created_at)}</li>
        <li>Owner: {review.owner}</li>
        <li>Category: {review.category}</li>
        <li>Designer: {review.designer}</li>
        <li>Votes: {review.votes}</li>
      </ul>
      <img src={review.review_img_url} alt="" />
    </>
  );
}

export default ReviewCard;
