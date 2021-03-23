import { Module } from "vuex";

const Store: Module<any, any> = {
    namespaced: true,
    state: {
        UserName: "",
        Pass: ""
    },
    mutations: {
        setUserName(state, value) {
            state.userInfo = value;
        },
        setPass(state, value) {
            state.userInfo = value;
        }
    },
    getters: {
        userName: (state) => {
            return state.UserName;
        },
        passWord: (state) => {
            return state.Pass;
        }
    },
    actions: {
        //
    }
};

export { Store as user };