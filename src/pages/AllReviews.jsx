import { useState, useEffect } from "react";
import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import ReviewCard from "../components/reviewWidgets/ReviewCard";
import Loader from "../components/textNodes/Loader";

function AllReviews() {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    reviews.get("/reviews").then(({ data }) => {
      setReviewData(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader loaderText={`Loading reviews, please wait`} />
        ) : (
          <>
          <MainHeading headingText={"All Reviews"} />
          <Loader loaderText={`${reviewData.length} reviews found`} />
          {reviewData.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </>
      )}
    </>
  );
}

export default AllReviews;
