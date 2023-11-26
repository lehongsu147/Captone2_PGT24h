import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import classes from "./PaymentResult.module.css";
import { Col, Row } from "antd";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { useContext } from "react";
import { formatCurrency } from "../../services/CurrencyUtil.js";
import Footer from "../../components/Footer/Footer.jsx";
import { AuthContext } from "../../context/auth.context.js";
import PaymentFactories from "../../services/PaymentFactories.js";
import { ToastNotiError } from "../../utils/Utils.js";
import { createNotification } from "../../services/ChatService.js";

function PaymentResult() {
  const { user } = useContext(AuthContext);
  const [params, setParams] = useSearchParams();
  const [payment, setPayment] = useState({});
  const [pgt, setPgt] = useState();

  async function updateStatusPayment(paymentResult) {
    try {
      const resp = await PaymentFactories.getPaymentDetail(paymentResult.txnRef);
      if (resp?.status === 200) {
        const paymentData = resp.data;
        setPgt(paymentData?.pgt_name)
        if (paymentResult?.status === 'SUCCESS') {
          try {
            await PaymentFactories.updatePaymentDetail(paymentResult.txnRef, paymentResult?.txnNo);
          } catch (error) {
            ToastNotiError('Có lỗi xảy ra, liên hệ với Admin')
          }
          createNotification(paymentData?.user_id, 6, paymentData?.booking_id, "Thanh toán thành công", `Thanh toán thành công cho lượt booking PGT ${paymentData?.pgt_name}`);
          createNotification(paymentData?.pgt_id, 6, paymentData?.booking_id, "Thanh toán thành công", `Người dùng ${paymentData?.user_name} thanh toán thành công cho lượt booking `);
        }
      }
      else {
        ToastNotiError();
      }
    } catch (error) {
      ToastNotiError();
    }
  }

  useEffect(() => {
    const paymentResult = {
      method: "VNPAY",
      amount: params.get("vnp_Amount"),
      bankCode: params.get("vnp_BankCode"),
      bankTxnNo: params.get("vnp_BankTranNo"),
      description: params.get("vnp_OrderInfo"),
      timestamp: params.get("vnp_PayDate"),
      txnNo: params.get("vnp_TransactionNo"),
      status: params.get("vnp_TransactionStatus") === "00" ? "SUCCESS" : "FAILED",
      txnRef: params.get("vnp_TxnRef"),
    };
    setPayment(paymentResult);
  }, [params]);
  
  useEffect(() => {
    if (payment?.txnRef){
      updateStatusPayment(payment);
    }
  }, [payment])

  return (
    <div style={{width: '100%'}}>
      <div className={classes.payment}>
        <Row>
          <Col offset={4}></Col>
          <Col span={16}>
            <div className={classes["payment-wrap"]}>
              {payment.status === "SUCCESS" ? (
                <CheckCircleFilled className={classes["icon-success"]} />
              ) : (
                <CloseCircleFilled className={classes["icon-failed"]} />
              )}

              <h3 class="text-muted">
                {payment?.status === "SUCCESS"
                  ? "Thanh toán thành công"
                  : "Thanh toán thất bại"}
              </h3>

              {payment.status === "SUCCESS" && (
                <p>
                  Quý doanh nghiệp đã thanh toán thành công{" "}
                  <b>{formatCurrency("vi-VN", "VND", payment.amount / 100)}</b>{" "}
                  cho PGT <b>{pgt}</b>. Mã giao
                  dịch <b>{payment.txnNo}</b>.
                </p>
              )}

              {payment.status === "FAILED" && (
                <p>
                  Giao dịch không thực hiện được. Vui lòng thử lại sau. Mã giao
                  dịch <b>{payment.txnNo}</b>
                </p>
              )}

              <Link to="/">Trở về trang chủ</Link>
              <footer class="footer">
                <p>&copy; VNPAY 2023</p>
              </footer>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentResult;
