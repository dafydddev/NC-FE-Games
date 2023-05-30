import { useState, useEffect } from "react";
import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import ReviewCard from "../components/reviewWidgets/ReviewCard";
import Loader from "../components/textNodes/Loader";

function Reviews() {
  const pageName = "Reviews";
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
      <MainHeading headingText={pageName} />
      {isLoading ? (
        <Loader loaderText={`Loading ${pageName}, please wait`} />
      ) : (
        <>
          <Loader loaderText={`${reviewData.length} reviews found`} />
          {reviewData.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </>
      )}
    </>
  );
}

export default Reviews;
