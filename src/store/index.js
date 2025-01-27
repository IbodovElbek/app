import { createStore } from 'vuex';

export default createStore({
  state: {
    api: '',
    liked: [],
    saved: [] // Saqlanganlarni boshqarish uchun yangi massiv
  },
  mutations: {
    // Mutatsiya: saved massiviga yangi element qo'shish
    addToSaved(state, verses) {
      state.saved.push(verses);
    }
  },
  getters: {
    // Saqlangan elementlarni olish uchun getter
    getSaved(state) {
      return state.saved;
    }
  }
});
