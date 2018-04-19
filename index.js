$(document).ready(function(){

	var score = Math.floor(Math.random()*400)+300;
	var descriptor = []
	var recommender = ["Stop posting about politics", "Only like or tweet between 9am and 8pm", "Only post what your followers want to see", "Post less selfies", "Link videos of dogs to your profile", "More memes, less group photos", "Share more Tasty videos", "Don\u0027t make emotional posts","Make a blog from your most popular post", "Don\u0027t post about yourself","Optimize your likes with more videos about Cardi B","Everyone loves moms, so post about yours"];
	var randomDescriptor = Math.floor(Math.random()*(descriptor.length));
	var randomRecommender = Math.floor(Math.random()*(recommender.length));

	//console.log() just prints text to the console which you can see if you open your developer tools/inspector
	//this is v helpful for debugging
	console.log(score);
	//console.log(randomDescriptor);

	$('#score').text(score);
	$('#description').text(descriptor[randomDescriptor])
	$('#recommendations').text(recommender[randomRecommender]);

})
