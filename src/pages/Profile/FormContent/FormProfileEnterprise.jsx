import { useEffect, useState } from "react";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row, Select } from "antd";

import classes from "./Form.module.css";
import Message from "../../../components/UI/Message/Message";
import { updateUserAvatar } from "../../../services/UserService";
import { updateEntProfile } from "../../../services/EnterpriseService";
import { getEntProfile } from "../../../services/EnterpriseService";
import { getEntFields } from "../../../services/FieldService";
import { getCities } from "../../../services/CityService";
import Constants from "../../../utils/constants";

export default function FormProfileEnterprise(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [profile, setProfile] = useState({});
  const [cities, setCities] = useState([]);
  const [fields, setFields] = useState([]);
  const [fieldName, setFieldName] = useState();
  const [cityName, setCityName] = useState();
  const [showMessage, setShowMessage] = useState({
    status: false,
    type: "",
    content: "",
  });

  const changeMessage = () => {
    setShowMessage({
      status: false,
      type: "",
      content: "",
    });
  };

  const createErrorMessage = (msg) => {
    setShowMessage({ status: true, type: "error", content: msg });
  };

  const createSuccessMessage = (msg) => {
    setShowMessage({ status: true, type: "success", content: msg });
  };

  useEffect(() => {
    // Promise.all([getEntProfile(), getCities(), getEntFields()]).then(
    //   ([profile, cities, fields]) => {
    //     setProfile(profile);
    //     setCities(cities);
    //     setFields(fields);
    //   }
    // );
  }, []);

  const cityOptions = cities.map((c) => {
    return {
      value: c.id,
      label: c.name,
    };
  });

  const fieldOptions = fields.map((s) => {
    return {
      value: s.id,
      label: s.name,
    };
  });

  const inputChangeHandler = (event) => {
    setProfile((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const changeCityHandler = (value) => {
    setCityName(value);
    setProfile((prevState) => {
      return {
        ...prevState,
        cityId: value,
      };
    });
  };

  const changeFieldsHandler = (value) => {
    setFieldName(value);
    setProfile((prevState) => {
      return {
        ...prevState,
        fieldIds: value,
      };
    });
  };

  const avatarChangeHandler = (event) => {
    updateUserAvatar(event.target.files[0]).then((res) => {
      setUser((prev) => ({ ...prev, avatar: res.avatar }));
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, avatar: res.avatar })
      );
      window.dispatchEvent(new Event("storage"));
    });
  };

  const validateFormData = (formData) => {
    let res = true;
    let errMsg = "";
    if (!formData.firstName) {
      errMsg = "Vui lòng nhập tên của bạn!";
    } else if (!formData.lastName) {
      errMsg = "Vui lòng nhập họ của bạn!";
    } else if (!formData.name) {
      errMsg = "Vui lòng nhập tên doanh nghiệp!";
    } else if (!formData.phone) {
      errMsg = "Vui lòng nhập số điện thoại của bạn!";
    } else if (!formData.taxId) {
      errMsg = "Vui lòng nhập mã số thuế!";
    } else if (!formData.cityId) {
      errMsg = "Vui lòng chọn tỉnh/thành phố địa chỉ!";
    } else if (!formData.fieldIds) {
      errMsg = "Vui lòng chọn lĩnh vực hoạt động!";
    } else if (!formData.addressDetails) {
      errMsg = "Vui lòng nhập địa chỉ cụ thể!";
    } else if (!formData.introduction) {
      errMsg = "Vui lòng nhập giới thiệu về công ty!";
    }
    if (errMsg) {
      createErrorMessage(errMsg);
      res = false;
    }
    return res;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!validateFormData(profile)) return;
    updateEntProfile(profile).then(
      createSuccessMessage("Cập nhật thành công!")
    );
  };
  const optionCategory = Constants.optionsCategory.map((field) => {
    return {
      value: field.id,
      label: field.name,
    };
  });
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Row>
        <Col span={16}>
          <Message
            status={showMessage.status}
            type={showMessage.type}
            content={showMessage.content}
            changeMessage={changeMessage}
          />
          <h1>Thông tin cá nhân</h1>
          <Row className={classes.form_control}>
            <Col span={7}>Tên:</Col>
            <Col span={17}>
              <input
                placeholder="Tên của bạn"
                className={classes.input_profile}
                name="firstName"
                onChange={inputChangeHandler}
                defaultValue={profile.firstName}
              />
            </Col>
          </Row>

          <Row className={classes.form_control}>
            <Col span={7}>Họ:</Col>
            <Col span={17}>
              <input
                placeholder="Họ của bạn"
                onChange={inputChangeHandler}
                className={classes.input_profile}
                defaultValue={profile.lastName}
                name="lastName"
              />
            </Col>
          </Row>

          <Row className={classes.form_control}>
            <Col span={7}>Số điện thoại:</Col>
            <Col span={17}>
              <input
                placeholder="Số điện thoại"
                onChange={inputChangeHandler}
                className={classes.input_profile}
                defaultValue={profile.phone}
                name="phone"
              />
            </Col>
          </Row>

          {user?.role === 2 &&
            <Row className={classes.form_control}>
              <Col span={7}>Lĩnh vực:</Col>
              <Col span={17}>
                <Select
                  showSearch
                  mode="multiple"
                  allowClear
                  placeholder="Chọn lĩnh vực hoạt động"
                  className={classes.select_profile}
                  optionFilterProp="children"
                  options={optionCategory}
                  onChange={changeFieldsHandler}
                  value={fieldName ? fieldName : profile.fieldIds}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                />
              </Col>
            </Row>}


          <Row className={classes.form_control}>
            <Col span={7}>Tỉnh/Thành phố:</Col>
            <Col span={17}>
              <Select
                showSearch
                placeholder="Chọn tỉnh/thành phố địa chỉ"
                className={classes.select_profile}
                optionFilterProp="children"
                options={Constants.vietnamProvinces}
                onChange={changeCityHandler}
                value={cityName ? cityName : profile.cityId}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              />
            </Col>
          </Row>

          <Row className={classes.form_control}>
            <Col span={7}>Địa chỉ cụ thể:</Col>
            <Col span={17}>
              <input
                placeholder="Địa chỉ cụ thể"
                onChange={inputChangeHandler}
                className={classes.input_profile}
                defaultValue={profile.addressDetails}
                name="addressDetails"
              />
            </Col>
          </Row>

          <Row className={classes.form_control}>
            <Col span={7}>Mô tả:</Col>
            <Col span={17}>
              <textarea
                placeholder="Giới thiệu về bản thân"
                onChange={inputChangeHandler}
                className={classes.input_profile}
                defaultValue={profile?.introduction}
                name="introduction"
              />
            </Col>
          </Row>

          <Row>
            <Col offset={4}></Col>
            <Col span={16}>
              <button className={classes.btnSubmit} type="submit">
                Cập nhật
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );
}
