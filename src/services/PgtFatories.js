import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const PgtFactories = {
  getListPGT: async data => {
    return ApiOperation.request({
      url: ApiConstants.PGT,
      method: "GET",
      params: {
        type: "1"
      }
    });
  },
  getPGTDetail: async data => {
    return ApiOperation.request({
      url: `${ApiConstants.PGT}/${data}`,
      method: "GET",
    });
  },
  requestBooking: async data => {
    return ApiOperation.request({
      url: ApiConstants.BOOKING_PGT,
      method: "POST",
      data: data,
    });
  },
};

export default PgtFactories;
