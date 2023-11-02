import { defineStore } from "pinia";

export const useCount = defineStore("main", {
  state: () => {
    return {
      count: 1,
      firstName: "John",
    };
  },
  getters: {
    doubleCount:(state)=> {return state.count +5}
    ,
    getStateCount(state){
      return state.count +'测试';
    }
  },
  actions: {
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
});
