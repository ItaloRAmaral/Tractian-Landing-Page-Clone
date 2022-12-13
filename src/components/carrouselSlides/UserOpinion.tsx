import React from "react";
import quote from "../../images/quote.png";

import "swiper/css";
import "swiper/css/pagination";

interface UserOpinionType {
  name: string;
  position: string;
  industry: string;
  image: string;
  opinion: string;
}

interface UserOpinionProps {
  userOpinion: UserOpinionType;
}

function UserOpinion(props: UserOpinionProps): JSX.Element {
  const { userOpinion } = props;
  return (
    <>
      <div className="opinion">
        <img src={quote} alt="Quote" />
        <p>{userOpinion.opinion}</p>
        <img
          src="https://tractian.com/website/pages/home/general/stars.svg"
          alt="Stars"
        />
      </div>

      <div className="client-info">
        <img src={userOpinion.image} alt="Profile Photo" />
        <div>
          <h3>{userOpinion.name}</h3>
          <p>{userOpinion.position}</p>
          <p>{userOpinion.industry}</p>
        </div>
      </div>
    </>
  );
}

export default UserOpinion;
