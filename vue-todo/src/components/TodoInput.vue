<template>
  <div class="inputBox"><input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
  <span class="addContainer" @click="addTodo">
    <i class="fas fa-plus addBtn"></i>
  </span>

  <Modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
    -->
        <h3 slot="header">경고
          <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
        </h3>
        <h5 slot="body">바디: 무언가를 입력하세요.</h5>
        <h2 slot="footer">푸터: copy right</h2>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    // 저장하는 로직
    addTodo() {
      if (this.newTodoItem !== '') {
      // this.$emit('addTodoItem', this.newTodoItem);
      const text = this.newTodoItem.trim();
      this.$store.commit('addOneItem', text);
      this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    // 초기화 로직
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal
    }
  }
</script>

<style>
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

.closeModalBtn {
  color: #42b983;
}
</style>