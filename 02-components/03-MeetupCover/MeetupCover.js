import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      default: 'Название Митапа',
    },
    image: {
      type: String,
    },
  },

  computed: {
    bgImg() {
      return this.image && { '--bg-url': `url( ${this.image} )` };
    },
  },

  template: `
    <div class="meetup-cover" :style="bgImg">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
