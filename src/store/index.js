import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: []
  },
  mutations: {
    BIRDS_GET(state, birds){state.birds = birds}
  },
  actions: {
    BirdsGet({commit}){
      axios.get (`http://aves.ninjas.cl/api/birds`,{
        headers:{
          "Content-type": "text/plain"
        }
      }).then((available) =>{
      let data = available.data;
     commit('BIRDS_GET', data)
    }). catch(negado => console.log(negado))
   }
  },
  modules: {
  }
})
