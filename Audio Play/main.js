
for(var i=0;i<3;i++){
	document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
		var text = this.innerHTML;
		document.write(text);

		switch (text){
			case "Audio1":
				var audio = new Audio("audio/audio1.mp3");
				audio.play();
				break;

			case "Audio2":
				var audio = new Audio("audio/audio2.mp3");
				audio.play();
				break;
			case "Audio3":
				var audio = new Audio("audio/audio1.mp3");
				audio.play();
				break;		
		}

  });
}
