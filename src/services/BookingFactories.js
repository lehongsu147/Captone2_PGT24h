import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const BookingFactories = {
  getListBookingForUser: async id => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING_USER}/${id}`,
      method: "GET",
    });
  },
  getListRequestBookingForPGT: async id => {
    return ApiOperation.request({
      url: `${ApiConstants.REQUEST_BOOKING_PGT}/${id}`,
      method: "GET",
    });
  },
  // getPGTDetail: async data => {
  //   return ApiOperation.request({
  //     url: `${ApiConstants.PGT}/${data}`,
  //     method: "GET",
  //   });
  // },
  updateBooking: async (data,type) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING_PGT}/${data}`,
      method: "PUT",
      params: {
        type: type
      }
    });
  },
  requestBooking: async data => {
    return ApiOperation.request({
      url: ApiConstants.BOOKING_PGT,
      method: "POST",
      data: data,
    });
  },
  getBookingDetail: async data => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING_PGT}/${data}`,
      method: "GET",
    });
  },
};

export default BookingFactories;
