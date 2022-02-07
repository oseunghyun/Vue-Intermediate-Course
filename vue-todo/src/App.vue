<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  methods: {
    // addOneItem(todoItem) {
    //   const obj = {completed: false, item: todoItem};
    //   // JSON.stringify: 자바스크립트 객체를 스트링으로 변환해주는 api
    //   // this.newTodoItem의 값이 string으로 들어가짐
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   this.todoItems.push(obj);
    //   // localStorage.setItem(this.newTodoItem, this.newTodoItem);
    // },
    // removeOneItem(todoItem, index) {
    //   console.log(todoItem, index);
    //   // 오브젝트가 아닌 특정 문자열, 키 값을 접근해서 지움
    //   localStorage.removeItem(todoItem.item);
    //   // 인덱스에 해당하는 아이템을 지우게 됨
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   // todoItem.completed = !todoItem.completed;
    //   this.todoItems[index].completed = !this.todoItems[index].completed;
    //   // 로컬 스토리지의 데이터를 갱신
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItem() {
    //   localStorage.clear();
    //   // 빈 배열로 만들기
    //   this.todoItems = [];
    // }
  },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

</style>
