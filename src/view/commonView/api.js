import request from "@/src/utils/request";
// 获取方案条款列表
export function getList(params) {
    return request({
      url: "/common/GasolinePriceQuery",
      method: "get",
      params
    });
  }