import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from './meetupService.js';
import MeetupView from '../06-MeetupView/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  data() {
    return {
      meetupItem: {},
      loading: true,
      errorText: null,
    };
  },

  watch: {
    meetupId: {
      immediate: true,
      handler: function () {
        this.loading = true;

        fetchMeetupById(this.meetupId)
          .then((item) => {
            this.meetupItem = item;
          })
          .catch((err) => {
            this.errorText = err.message;
            this.meetupItem = {};
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
  },

  template: `
    <div class="page-meetup">
      <template v-if="!errorText">        
        <ui-container v-if="loading" >
          <ui-alert>Загрузка...</ui-alert>
        </ui-container>

        <meetup-view v-else :meetup="meetupItem"/>
      </template>

      <ui-container v-else >
        <ui-alert>{{ errorText }}</ui-alert>
      </ui-container>
    </div>`,
});
