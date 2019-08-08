import Axios from "axios";

export default {
    state: {
        category: []
    },
    getters : {
        getCategory(state){
            return state.category;
        }   
    },
    actions : {
        allCategory(context) {
            Axios.get('/category').then((response)=>{
                context.commit('categories',response.data.categories);
                //console.log(response.data.categories);
            });
        }
    },
    mutations : {
        categories(state,data) {
            return state.category = data;
        } 
    }

}