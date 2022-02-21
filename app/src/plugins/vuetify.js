import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const theme = {
  primary: '#44BBA4',
  textPrimary: '#393E41',
  textSecundary: '#717172',
  textGray: '#818E9B',
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
