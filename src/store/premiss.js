import { defineStore } from "pinia";
// const keys = localStorage.getItem('ms_keys');
export const usePermissStore = defineStore('premiss',{
    state:()=>({
        // key:keys?JSON.parse(keys):[],
        defaultList:{
            admin: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
            user: ['1', '2', '3', '11', '13', '14', '15']
        }
    }),
    actions:{
        handleSet(val) {
			this.key = val;
		}
    }
})