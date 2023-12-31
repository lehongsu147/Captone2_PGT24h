import React from "react";
import ContentHome from "../../components/Content/ContentHome";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  return (
    <ContentHome serchValue={keyword} />
  );
};

export default Home;
