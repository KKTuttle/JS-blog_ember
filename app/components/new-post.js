import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        title: this.get('title'),
        content: this.get('content'),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
