import { createApp } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const app = createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      operands: {
        sum: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
      },
      operand: '',
    };
  },

  computed: {
    resultOperand() {
      return this.operand ? eval(this.num1 + this.operands[this.operand] + this.num2) : 0;
    },
  },
}).mount('#app');