$(document).ready(function(){
	$('.masthead').mouseenter(function() {
		$('.masthead-intro').effect("bounce", "slow");
	});

	$('.profile').hover(function() {
		$(this).attr('src','http://i.imgur.com/14CNy1g.jpg');
	}, function() {
		$(this).attr('src', 'http://i.imgur.com/zy8YrAs.jpg');
	});
});