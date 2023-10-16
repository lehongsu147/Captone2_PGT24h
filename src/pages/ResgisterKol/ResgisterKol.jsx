import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../services/DateTimeUtil";
import { createBooking } from "../../services/BookingService";
import { BookingStatus } from "../../utils/Enums";

import classes from "./ResgisterKol.module.css";
import { MessageContext } from "../../context/Message.context";
import { Modal, DatePicker, Form, Select, Button, Input, TimePicker, Space, Row, Col } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { convertStringToNumber, getDate } from '../../utils/Utils';
import { toast } from "react-toastify";
import Constants from "../../utils/constants";

const ResgisterKol = (props) => {


  return (
    <div>
      <Row>
        <Col span={20}>
          <Row>
            <Col span={12}  >
              <div className={classes.formInfo}>
                <Row>
                  <span>Họ:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Họ của bạn"
                    className={classes['modal-update-col-input']}
                    name="firstname"
                  />
                </Row>
              </div>

              <div className={classes.formInfo}>
                <Row>
                  <span>Tên tài khoản:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Tên tài khoản"
                    className={classes['modal-update-col-input']}
                    name="username"
                  />
                </Row>
              </div>

              <div className={classes.formInfo}>
                <Row>
                  <span>Giới tính:</span>
                </Row>
                <Row>
                  <Select
                    placeholder="Giới tính"
                    defaultValue={'Nữ'}
                    style={{
                      width: "100%",
                    }}
                    options={Constants.optionSex}
                  />
                </Row>
              </div>

              <div className={classes.formInfo}>
                <Row>
                  <span>Số điện thoại:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Số điện thoại"
                    className={classes['modal-update-col-input']}
                    name="phone"
                  />
                </Row>
              </div>

              <div className={classes.formInfo}>
                <Row >
                  <span>Tỉnh/Thành phố:</span>
                </Row>
                <Row>
                  <Select
                    style={{
                      width: "100%",
                    }}
                    options={Constants.vietnamProvinces}
                  />
                </Row>
              </div>

            </Col>
            <Col span={12}>
              <div className={classes.formInfo}>
                <Row>
                  <span>Tên:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Tên của bạn"
                    className={classes['modal-update-col-input']}
                    name="lastname"
                  />
                </Row>
              </div>
              <div className={classes.formInfo}>
                <Row>
                  <span>Email:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Email"
                    className={classes['modal-update-col-input']}
                    name="email"
                  />
                </Row>
              </div>

              <div className={classes.formInfo}>
                <Row>
                  <span>Địa chỉ cụ thể:</span>
                </Row>
                <Row>
                  <input
                    placeholder="Địa chỉ cụ thể"
                    className={classes['modal-update-col-input']}
                    name="addressDetails"
                  />
                </Row>
              </div>



              <div className={classes.formInfo}>
                <Row>
                  <span>Trạng thái:</span>
                </Row>
                <Row>
                  <Select
                    style={{
                      width: "100%",
                    }}
                    placeholder="Chọn trạng thái"
                    options={Constants.optionStatus}
                  />
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ResgisterKol;
