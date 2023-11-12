import React from "react";
import Content from "../../components/Content/ContentHome";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  return (
    <Content serchValue={keyword} />
  );
};

export default Home;
