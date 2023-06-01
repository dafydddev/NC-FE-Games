import { parseDate } from "../../utils/parseDate";
import { Link } from "react-router-dom";
import SubHeading from "../textNodes/SubHeading";

function ReviewCard({ review }) {
  return (
    <>
      <SubHeading headingText={`${review.title} Review`} />
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
