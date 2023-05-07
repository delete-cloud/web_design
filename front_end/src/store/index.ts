import {createStore} from 'vuex'

export default createStore({
    state: {
        // 背景相关
        bgcount: 1
    },
    mutations: {
        changBgCount(state, n) {
            console.log(n)
            state.bgcount = n;
        }
    },
})
