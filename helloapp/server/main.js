import { Meteor } from 'meteor/meteor';

//Users = Meteor.collection('usersCollection');
//users

Meteor.startup(() => {
  // code to run on server at startup
  console.log("app is running...");
});

Meteor.methods({
	'adduser': function (newuser) {
		Meteor.users.add('newuser'); //error:not a function
	},

    'deleteuser': function (user) {
    	Meteor.users.remove('user');
    }

});