var splashed = false;
var recording = false;
var recordingInterval;
var totalVideo = 0;

$(function(){
	var video = document.getElementById("video");
	var videoFinal = document.getElementById("video_final");

	if (!splashed){
		setTimeout(function(){
			$("body").pagecontainer("change", "#register-page");	
			splashed = true;
		}, 2000);	
	}

	$('.dubframe').on('click', function(){
		if ($.mobile.activePage.attr('id') == 'record-page'){
			video.volume = 0;
			video.currentTime = 0;
			video.play();
		}else{
			videoFinal.currentTime = 0;
			videoFinal.play();
		}
		$('.play').hide();
		
	});

	$('#video, #video_final').on('ended', function(){
		$('.play').show();
		clearInterval(recordingInterval);
		$('.recording').hide();
		$('#record-btn').css('border', 'none');

		if ($.mobile.activePage.attr('id') == 'record-page' && recording){
			$("body").pagecontainer("change", "#upload-page");
		}	
	});

	$('#record-btn').on('click', function(){
		recording = true;
		$('#record-btn').css('border', '2px solid orange');
		$('#progress div').css('width', 0);

		var video = document.getElementById("video");
		video.addEventListener('loadedmetadata', function() {
			totalVideo = video.duration;
		});

		clearInterval(recordingInterval);
		recordingInterval = setInterval(function(){
			$('.recording').toggle();
			var total = parseFloat($('#progress').css('width').replace(/[^-\d\.]/g, ''));
			var progress = parseFloat($('#progress div').css('width').replace(/[^-\d\.]/g, ''));
			if (progress <= total){
				var newProgress = progress+total/totalVideo;

				if (newProgress > total)
					newProgress = total;

				console.log(newProgress/total*100+'%');
				$('#progress div').css('width', newProgress);	
			}
		}, 1000);

		$('.play').hide();
		video.currentTime = 0;
		video.volume = 0;
		video.play();

		//grabar audio
	});

	$('#search-bar-btn').on('click', function(){
		$('#myFilter').parents('form.ui-filterable').toggle();
	});
});