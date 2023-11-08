import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const PgtFactories = {
  getListPGT: async data => {
    return ApiOperation.request({
      url: ApiConstants.LIST_PGT,
      method: "GET",
      params: {
        type: "1"
      }
    });
  }
};

export default PgtFactories;
