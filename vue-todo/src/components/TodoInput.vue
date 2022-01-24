<template>
  <div class="inputBox"><input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
  <span class="addContainer" @click="addTodo">
    <i class="fas fa-plus addBtn"></i>
  </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    // 저장하는 로직
    addTodo() {
      if (this.newTodoItem !== '') {
        var obj = {completed: false, item: this.newTodoItem};
      // JSON.stringfy: 자바스크립트 객체를 스트링으로 변환해주는 api
      // this.newTodoItem의 값이 string으로 들어가짐
      localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
      // localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.clearInput();
      }
    },
    // 초기화 로직
    clearInput() {
      this.newTodoItem = '';
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}

</style>