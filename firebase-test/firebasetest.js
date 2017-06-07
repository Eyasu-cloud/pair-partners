// Initialize Firebase
var config = {
	apiKey: "AIzaSyCdoBkKYmhVlgvy46sBKLLknJUszf-TYAc",
	authDomain: "test-web-app-4fde9.firebaseapp.com",
	databaseURL: "https://test-web-app-4fde9.firebaseio.com",
	projectId: "test-web-app-4fde9",
	storageBucket: "test-web-app-4fde9.appspot.com",
	messagingSenderId: "406177608219"
};

firebase.initializeApp(config);

// Create a JavaScript object for the HTML element that has id="message"
var messageBox = document.getElementById("message");

// Get a reference to the row of our database called "greeting"
var dbRef = firebase.database().ref().child("greeting");

// Whenever our database reference is updated, show the data on our web page!
dbRef.on("value", function(dataSnapshot) {
	messageBox.textContent = dataSnapshot.val();
});
