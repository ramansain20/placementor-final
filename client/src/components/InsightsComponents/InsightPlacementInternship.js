import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanySection from "./CompanySection";
import HeadingSection from "./HeadingSection";
import SearchBar from "./SearchBar";
export default function InsightPlacement() {
  const location = useLocation();
  if (location.pathname === "/insight/placement") console.log("placement");
  else if (location.pathname === "/insight/internship")
    console.log("internship");

  //if url is pointing to placemet then show placement one and
  //if it is pointing to internship one show intership one
  return (
    <>
      <HeadingSection />
      <Link to="/insight/placement">/placement</Link>
      <Link to="/insight/internship">/internship</Link>
      <SearchBar />
      <CompanySection />
    </>
  );
}
