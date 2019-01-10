import {actions} from "mirrorx";
import * as api from "./service";

export default {
    // 确定 Store 中的数据模型作用域
    name: "pay",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        helloMsg:'',
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {
        /**
         * 按钮测试数据
         * @param {*} param
         * @param {*} getState
         */
        loadData(param, getState) {
            
        }
    }
};
