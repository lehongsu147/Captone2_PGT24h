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
  createVnPayPayment: async (data) => {
    return ApiOperation.request({
      url: ApiConstants.PAYMENT_URL,
      method: "POST",
      data: data,
    });
  },
};

export default PaymentFactories;
