import React, { useState } from "react";
import { Col, Row } from "antd";
import MenuProfile from "./Menu/MenuProfile";
import SubContext from "./SubContext/SubContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";

const Profile = () => {
  const [changeContent, setChangeContent] = useState({});
  console.log(changeContent);
  const user = JSON.parse(localStorage.getItem("user"));

  const onChangeContentHandler = (data) => {
    setChangeContent(data);
  };

  return (
    <>
      <div style={{ width: '100%', backgroundColor: "#fff" }}>
        <Row>
          <Col span={4}>
            <MenuProfile
              style={{marginTop: '-64px'}}
              user={user}
              onChangeContentHandler={onChangeContentHandler}
            />
          </Col>
          <Col span={20}>
            <SubContext user={user} changeContent={changeContent} />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Profile;
