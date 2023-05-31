import { parseDate } from "../../utils/parseDate";

function ReviewDetail({ review }) {
  return (
    <>
      <ul>
        <li>Created at: {parseDate(review.created_at)}</li>
        <li>Owner: {review.owner}</li>
        <li>Category: {review.category}</li>
        <li>Designer: {review.designer}</li>
        <li>Votes: {review.votes}</li>
      </ul>
      <p>{review.review_body}</p>
      <img src={review.review_img_url} alt="" />
    </>
  );
}

export default ReviewDetail;
