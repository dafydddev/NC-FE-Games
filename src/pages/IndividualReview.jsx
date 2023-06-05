import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import reviews from "../api/api";

import MainHeading from "../components/textNodes/MainHeading";
import Loader from "../components/textNodes/Loader";
import ReviewDetail from "../components/reviewWidgets/ReviewDetail";
import CommentsPanel from "../components/commentsWidgets/CommentsPanel";
import VoteButtons from "../components/voteWidgets/VoteButtons";

function IndividualReview() {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [voteCount, setVoteCount] = useState(0);

  const updateVoteCount = (newVoteCount) => {
    setVoteCount(newVoteCount);
  };

  useEffect(() => {
    reviews.get(`/reviews/${id}`).then(({ data }) => {
      setReviewData(data);
      setVoteCount(data.votes)
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
          <VoteButtons id={id} updateVoteCount={updateVoteCount} />
          <ReviewDetail review={reviewData} votes={voteCount} />
          <CommentsPanel id={id} />
        </>
      )}
    </>
  );
}

export default IndividualReview;
