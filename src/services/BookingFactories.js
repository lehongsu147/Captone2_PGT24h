import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const BookingFactories = {
  getListBooking: async (name,dateCreate,dateBooking) => {
    let params = {};
    if (name){
      params.Keyword = name;
    }
    if (dateCreate){
      params.DateCreate = dateCreate;
    }
    if (dateBooking){
      params.DateBooking = dateBooking;
    }
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING}`,
      method: "GET",
      params: params
    });
  },
  getListBookingForUser: async id => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING_USER}/${id}`,
      method: "GET",
    });
  },
  getListRequestBookingForPGT: async id => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING_PGT}/${id}`,
      method: "GET",
    });
  },
  // getPGTDetail: async data => {
  //   return ApiOperation.request({
  //     url: `${ApiConstants.PGT}/${data}`,
  //     method: "GET",
  //   });
  // },
  requestBooking: async data => {
    return ApiOperation.request({
      url: ApiConstants.BOOKING,
      method: "POST",
      data: data,
    });
  },
  updateBooking: async (data,type) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING}/${data}`,
      method: "PUT",
      params: {
        type: type
      }
    });
  },
  deleteBookingId: async (id) => {
    return ApiOperation.request({
      url: `${ApiConstants.BOOKING}/${id}`,
      method: "DELETE",
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
