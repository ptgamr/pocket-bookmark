import Ember from 'ember';
import Oauth2Code from 'torii/providers/oauth2-code';
export default Oauth2Code.extend({
  pocketAjax: Ember.inject.service(),
  redirectUri: 'http://localhost:4200',
  open: function() {

    return this.get('pocketAjax').request('/oauth/request', {
      method: 'POST',
      data: {
        consumer_key: '53575-5f27307e120bcf618faed0d9',
        redirect_uri: this.get('redirectUri')
      }
    }).then(data => {
      let requestToken = data.code;
      let url = `https://getpocket.com/auth/authorize?request_token=${requestToken}&redirect_uri=${this.get('redirectUri')}`;
      return this.get('popup').open(url).then(authData => {
        console.log(authData);
      });
    });
  }
});
