import { createStore } from 'vuex';
import juegos from '../assets/juegos.json';

export default createStore({
    state:{
        juegos: juegos,
    },
    actions:{
        stockUp({commit}, index){
            commit('stockMutation', {index, sumar: 1});
        },
        stockDown({commit}, index){
            commit('stockMutation', {index, sumar: -1});
        }
    },
    mutations:{
        stockMutation(state, {index, sumar}){
            state.juegos[index].stock = parseInt(state.juegos[index].stock) + sumar;
            if(state.juegos[index].stock < 0){//evitar stock negativo ᓀ‸ᓂ
                state.juegos[index].stock = 0;
            }
        }
    }
});