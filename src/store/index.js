import { createStore } from 'vuex';
import juegos from '../assets/juegos.json';

export default createStore({
    state:{
        juegos: juegos,
    },
    actions:{
        stockUp(){
            //
        },
        stockDown(){
            //
        }
    },
    mutations:{
    }
});