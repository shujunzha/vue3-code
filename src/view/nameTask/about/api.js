import request from "@/utils/request.js";
// 获取油价列表
export function getList(params) {
    return request({
      url: "/common/GasolinePriceQuery",
      method: "get",
      params
    });
  }
  // 生成指定内容的二维码
  export function getEncode(params) {
    return request({
      url: "/qrcode/encode",
      method: "get",
      params,
      responseType: 'blob' //选择接收方式为blob

    });
  }