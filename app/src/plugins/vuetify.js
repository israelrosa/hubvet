import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const theme = {
  primary: '#5ba387',
  text: {
    primary: '#393E41',
    secundary: '#717172',
    gray: '#818E9B'
  },
  red: '#FF595D',
  border: '#E0E0E0',
  background: '#F5F6F8',
};

export default new Vuetify({
  theme: {
    themes: {
      light: theme,
    },
  },
});
