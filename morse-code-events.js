var morse_code_events = (function( element, timer_amount, threshold ){
	var morse_code = {
		"01": "a",
		"1000": "b",
		"1010": "c",
		"100": "d",
		"0": "e",
		"0010": "f",
		"110": "g",
		"0000": "h",
		"00": "i",
		"0111": "j",
		"101": "k",
		"0100": "l",
		"11": "m",
		"10": "n",
		"111": "o",
		"0110": "p",
		"1101": "q",
		"010": "r",
		"000": "s",
		"1": "t",
		"001": "u",
		"0001": "v",
		"011": "w",
		"1001": "x",
		"1011": "y",
		"1100": "z"
	}

	element = element || document;
	timer_amount = timer_amount || 800;
	threshold = threshold || 2.5;

	var text = [];
	var character = [];
	var press = null;
	var timer = null;
	var touching = false;

	// create DOM event

	// prototype
	var Morse_decipher = function(){
		this.start = 0;
		this.end = 0;
	};
	Morse_decipher.prototype.get_start = function() {
		clearTimeout(timer);
		this.start = Date.now() / 100;
	};
	Morse_decipher.prototype.get_end = function() {
		this.end = Date.now() / 100;
		start_timer();
		return this.end - this.start > threshold ? 1 : 0;
	};


	function start_timer(){
		timer = setTimeout(deciper_character,timer_amount);
	}

	function deciper_character(){
		text = morse_code[character.join("")];

		// trigger event
		if(text){
			var morse_event = new CustomEvent("morse_input", {detail: text});
			document.dispatchEvent(morse_event);
			character = [];
		}
	}

	function start(){
		press = new Morse_decipher();
		press.get_start()
	}

	function end(){
		press = press.get_end();
		character.push(press)
	}

	element.addEventListener("touchstart", function(){
		touching = true;
		start()
	})

	element.addEventListener("touchend", function(){
		touching = true;
		end()
	})

	element.addEventListener("mousedown", function(){
		if(!touching){
			start()
		}
	})

	element.addEventListener("mouseup", function(){
		if(!touching){
			end()
		}
		touching = false;
	})

});
