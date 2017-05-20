import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//import { Meteor } from 'meteor/meteor';
//Users = Meteor.collection('usersCollection');
//users

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click .buttonstyle'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
    },
   'click #greeting'(event){
   	alert("Hello!");
   }
   
});

Template.signup.events({
  'click #submit'(event){
    console.log("will add a new user");
    Meteor.call('adduser', function () {
      console.log("added a new user");
    });
  }


});