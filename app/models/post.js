import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  title: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
});
