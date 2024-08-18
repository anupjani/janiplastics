$(function(){
	$('#anupjani').jrumble({
		x: 1,
		y: 1,
		rotation: 0
	});
	$('#janiplastics').jrumble({
		x: 1,
		y: 1,
		rotation: 0
	});
	
	$('#anupjani, #janiplastics').hover(function(){
		$('#anupjani').trigger('startRumble');
		$('#janiplastics').trigger('startRumble');
	}, function(){
		$('#anupjani').trigger('stopRumble');
		$('#janiplastics').trigger('stopRumble');
	});
});
