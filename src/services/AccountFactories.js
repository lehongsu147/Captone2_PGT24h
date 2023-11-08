import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const AccountFactories = {
  requestLogin: async data => {
    return ApiOperation.request({
      url: ApiConstants.LOGIN,
      method: "POST",
      data: data
    });
  },
  requestLSignUp: async data => {
    return ApiOperation.request({
      url: ApiConstants.SIGNUP,
      method: "POST",
      data: data
    });
  }
};

export default AccountFactories;
