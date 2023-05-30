import { useState, useEffect } from "react";
import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import ReviewCard from "../components/reviewWidgets/ReviewCard";

function Reviews() {
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    reviews.get("/reviews").then(({ data }) => {
      setReviewData(data);
    });
  }, []);
  return (
    <>
      <MainHeading headingText={"Reviews"} />
      {reviewData.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </>
  );
}

export default Reviews;
