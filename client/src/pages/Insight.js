import React from "react";
import { Link } from "react-router-dom";
import MyLoader from "../components/InsightsComponents/MyLoader";
import InsightPlacement from "../components/InsightsComponents/InsightPlacement";
export default function Insight() {
  return (
    <>
      {/* <Link to="placement">/placement</Link>
      <Link to="internship">/internship</Link> */}

      <InsightPlacement />
      <MyLoader />
    </>
  );
}
