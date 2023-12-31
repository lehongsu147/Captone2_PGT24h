import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageField from "./PageField/PageField";
import { Pagination } from "antd";
import "./Fields.css";
const Fields = () => {
  let { id } = useParams();

  const [currentKol, setCurrentKol] = useState(1);
  const [totalKol, setTotalKol] = useState(30);
  const [listOfKol, setListOfKol] = useState();

  useEffect(() => {
    // getKolsByFieldIds(id).then((res) => {
    //   setListOfKol(res);
    //   setTotalKol(res.length);
    //   console.log(res);
    // });
  }, [id]);

  const onChangeCurrentKol = (page) => {
    setCurrentKol(page);
  };

  return (
    <div>
      <div className="fields">
        <h2>Lĩnh vực {listOfKol?.name}</h2>
        <div className="content-page">
          <PageField listOfKol={listOfKol} current={currentKol} />
        </div>
        <div className="content-pagination">
          <Pagination
            current={currentKol}
            onChange={onChangeCurrentKol}
            total={totalKol}
          />
        </div>
      </div>
    </div>
  );
};

export default Fields;
