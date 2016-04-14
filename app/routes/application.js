import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
    authenticate(provider) {
      this.get('session').authenticate('authenticator:torii', provider);
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
