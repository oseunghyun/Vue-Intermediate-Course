import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// use는 vue의 플러그인, vue를 전역으로 사용할 때

const storage = {
  fetch() {
      const arr = [];
      if(localStorage.length > 0) {
        for (let i = 0 ; i < localStorage.length ; i ++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            // this.todoItems.push(localStorage.key(i));
          }
        }
      }
      return arr;
    },
  };

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  }
});