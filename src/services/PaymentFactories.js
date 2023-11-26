// import { postAuth } from "./Common";

// export function createVnPayPayment(amount, bookingId) {
//   return postAuth(`payments/vnpay?amount=${amount}&txnRef=${bookingId}`);
// }

// export function createPayment(bookingId, payment) {
//   return postAuth(`user/bookings/${bookingId}/payments`, payment);
// }


import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const PaymentFactories = {
  createVnPayPayment: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.PAYMENT_URL,
      method: "POST",
      data: data,
    });
  },
  getPaymentDetail: async (id) => {
    return ApiOperation.request({
      url: `${ApiConstants.PAYMENT}/${id}`,
      method: "GET",
    });
  },
  getPaymentListForUser: async (id) => {
    return ApiOperation.request({
      url: `${ApiConstants.PAYMENT_USER}/${id}`,
      method: "GET",
    });
  },
  updatePaymentDetail: async (id,txtNo) => {
    return ApiOperation.request({
      url: `${ApiConstants.PAYMENT}${id}`,
      method: "PUT",
      data: {
        status : 2,
        txtNo: txtNo
      }
    });
  },
};

export default PaymentFactories;
