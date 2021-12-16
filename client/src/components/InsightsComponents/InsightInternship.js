import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import CompanyFetch from "./CompanyFetch";
import HeadingSection from "./HeadingSection";
import SearchBar from "./SearchBar";
export default function InsightInternship() {
  const location = useLocation();
  if (location.pathname === "/insight/placement") console.log("placement");
  //if url is pointing to placemet then show placement one and
  //if it is pointing to internship one show intership one
  return (
    <>
      <HeadingSection />
      <Link to="/insight/placement">/placement</Link>
      <Link to="/insight/internship">/internship</Link>
      <SearchBar />
      <CompanyFetch url="internship" />
    </>
  );
}
