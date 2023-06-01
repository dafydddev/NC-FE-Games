import { useState } from "react";
import reviews from "../../api/api";

function VoteButtons({ id, updateVoteCount }) {
  const [pressedButton, setPressedButton] = useState(null);
  const handleButtonClick = (event) => {
    event.preventDefault();
    const buttonName = event.target.name;
    let newVoteCount = 0;
    if (buttonName === "upVote" && pressedButton === null) {
      newVoteCount = 1;
    } else if (buttonName === "downVote" && pressedButton === null) {
      newVoteCount = -1;
    } else if (buttonName === "upVote" && pressedButton === "downVote") {
      newVoteCount = 2;
    } else if (buttonName === "downVote" && pressedButton === "upVote") {
      newVoteCount = -2;
    }
    if (newVoteCount !== 0) {
      reviews
        .patch(`/reviews/${id}`, {
          inc_votes: newVoteCount,
        })
        .then((response) => {
          updateVoteCount(response.data.votes);
        })
        .catch((error) => {
          console.error(error);
        });
      setPressedButton(buttonName);
    }
  };

  return (
    <ul>
      <li>
        <button
          aria-pressed={pressedButton === "upVote"}
          name="upVote"
          onClick={handleButtonClick}
        >
          Up Vote {pressedButton === "upVote" ? "(Voted)" : ""}
        </button>
        <button
          aria-pressed={pressedButton === "downVote"}
          name="downVote"
          onClick={handleButtonClick}
        >
          Down Vote {pressedButton === "downVote" ? "(Voted)" : ""}
        </button>
      </li>
    </ul>
  );
}

export default VoteButtons;