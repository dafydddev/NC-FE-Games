import { useState, useEffect } from "react";
import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import ReviewCard from "../components/reviewWidgets/ReviewCard";
import Loader from "../components/textNodes/Loader";
import ReviewCategoryNav from "../components/reviewWidgets/reviewCategoryNav";
import ReviewFilterControls from "../components/reviewWidgets/ReviewFilterControls";

function AllReviews() {
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("created_at");
  const [order, setOrder] = useState("asc");

  useEffect(() => {
    reviews.get("/reviews").then(({ data }) => {
      setReviewData(data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    reviews.get(`/reviews?sort_by=${sort}&order=${order}`).then(({ data }) => {
      setReviewData(data);
      setIsLoading(false);
    });
  }, [sort, order]);

  return (
    <>
      <MainHeading headingText={"Reviews"} />
      <ReviewCategoryNav />
      <ReviewFilterControls
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />
      {isLoading ? (
        <Loader loaderText={`Loading reviews, please wait`} />
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

export default AllReviews;
