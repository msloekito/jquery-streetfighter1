$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	});
	$('.ryu').mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left':'1020px', 'top':'500px'}, 500,
			function() {
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
				$('.hadouken').css('top', '170px');
	})
	});
		//play hadouken sound
		//show hadouken and animate it to the right of the screen
	$('.ryu').mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
		$('.hadouken').hide();
		//ryu goes back to ready position
	});

	$(document).keydown(function(e)
	{
		if(e.keyCode == 88)
		{
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();

			console.log("cool pose");
		};

	});

	/*$('.ryu').mouseenter().keyup(function()
	{
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			$('.ryu-cool').hide();
			console.log("mouse over ryu");
		
	});	*/

	$(document).keyup(function()
	{
			$('.ryu-still').show();
			$('.ryu-ready').hide();
			$('.ryu-cool').hide();
			console.log("keyup registered");
			$('.ryu').mouseenter(function(){
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			console.log("over ryu");	
	});
		
	});	
function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
})