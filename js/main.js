		//JRumble Function
		$(function(){
		$('#click2green').jrumble({
			x: 3,
			y: 3,
			rotation: 3
		});
		
		$('#click2green').hover(function(){
			$(this).trigger('startRumble');
		}, function(){
			$(this).trigger('stopRumble');
		});
		});
		function changeToolsImgDn(obj) {
			obj.src="images/jpToolsDn.jpg";
		}
		function changeToolsImgUp(obj) {
			obj.src="images/jpToolsUp.jpg";
		}
		/* Not in use 
		function showWindow() {
			var width = 550;
			var height = 240;
			var left = (screen.width  - width)/2;
			var top = (screen.height - height)/2;
			var features = 'width='+width+', height=' + height;

			features += ', top=' + top + ', left=' + left;
			features += ', directories =no';
			features += ', location=no';
			features += ', menubar=no';
			features += ', resizable=no';
			features += ', scrollbars=no';
			features += ', status=no';
			features += ', toolbar=no';
			 
			window.open("jp_tools.html","Conversion Tool",features);
		}
		*/