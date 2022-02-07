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
  },
  mutations: {
    addOneItem(state,todoItem ) {
      const obj = {completed: false, item: todoItem};
      // JSON.stringify: 자바스크립트 객체를 스트링으로 변환해주는 api
      // this.newTodoItem의 값이 string으로 들어가짐
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
      // localStorage.setItem(this.newTodoItem, this.newTodoItem);
    },
    removeOneItem(state, payload) {
      // console.log(todoItem, index);
      // 오브젝트가 아닌 특정 문자열, 키 값을 접근해서 지움
      localStorage.removeItem(payload.todoItem.item);
      // 인덱스에 해당하는 아이템을 지우게 됨
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      state.todoItems[payload.index].completed = !this.state[payload.index].completed;
      // 로컬 스토리지의 데이터를 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(state) {
      localStorage.clear();
      // 빈 배열로 만들기
      state.todoItems = [];
    }
  }
});