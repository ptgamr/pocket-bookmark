import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'https://getpocket.com',
  namespace: '/v3'
});
