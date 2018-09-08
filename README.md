# morse-code-event
Fires an event when user types in Morse code via touch or mouse interface

## Usage
```
    // initalizing events
    morse_code_events();

	// use event on document to trigger your code.
    // letter inputted will be a key in the event object
    document.addEventListener("morse_input", function(e){
	    console.log(e.detail);
    });
```

## Customization

You can customize the plugin in the following ways:
- target element, default is document
- input timer time, how long before a new word script begins new letter. Not a lot of people know the cadence of morse code, so I set the default is 800, but it can be shorter.
- press threshold, the difference between a dot and a dash. Default is 2.5.

## Contact

Feel free to create an issue, branch, or whatever. Project is release into the public domain. Do what you wish. Contact me on twitter if you have any questions, or just want to chat :D @heyhmphry.
