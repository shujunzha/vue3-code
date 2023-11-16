import { defineStore } from "pinia";


export const sliderDef = defineStore("sliderBar", {
  state: () => {
    return{
        sliderBar: false,
    }
  },
  actions:{
    handelSliderbar(){
        this.sliderBar = !this.sliderBar
    }
  },
})
