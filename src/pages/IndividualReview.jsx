import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import Loader from "../components/textNodes/Loader";
import ReviewDetail from "../components/reviewWidgets/ReviewDetail";
import CommentsPanel from "../components/commentsWidgets/CommentsPanel";

function IndividualReview() {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    reviews.get(`/reviews/${id}`).then(({ data }) => {
      setReviewData(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader loaderText={`Loading review, please wait`} />
      ) : (
        <>
          <MainHeading headingText={reviewData.title} />
          <ReviewDetail review={reviewData} />
          <CommentsPanel id={id} />
        </>
      )}
    </>
  );
}

export default IndividualReview;
