import ApiConstants from "../adapter/ApiConstants";
import ApiOperation from "../adapter/ApiOperation";

const CategoriesFactories = {
  getListCategories: async data => {
    return ApiOperation.request({
      url: ApiConstants.CATEGORIES,
      method: "GET",
    });
  }
};

export default CategoriesFactories;
