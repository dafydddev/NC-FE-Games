import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import ReviewCard from "../components/reviewWidgets/ReviewCard";
import Loader from "../components/textNodes/Loader";
import { parseCategorySlug } from "../utils/parseCategorySlug";

function ReviewByCategory() {
  const { category } = useParams();
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    reviews
      .get(`/reviews?category=${category}`)
      .then(({ data }) => {
        setReviewData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setReviewData([]);
      });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader loaderText={`Loading reviews, please wait`} />
      ) : (
        <>
          <MainHeading headingText={`${parseCategorySlug(category)} Reviews`} />
          <Loader loaderText={`${reviewData.length} reviews found`} />
          {reviewData.map((review) => (
            <ReviewCard key={review.review_id} review={review} />
          ))}
        </>
      )}
    </>
  );
}

export default ReviewByCategory;
