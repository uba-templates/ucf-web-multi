import request from "utils/request";
//定义接口地址
const URL = {
    "GET_LIST":  `${GROBAL_HTTP_CTX}/purchase_order/list`
}

/**
 * 获取主列表
 * @param {*} params
 */
export const getList = (params) => {
    return request(URL.GET_LIST, {
        method: "get",
        params
    });
}