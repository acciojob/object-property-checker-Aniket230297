const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey() {

   if('key' in sampleObject){
		   return true;
	   }
}

//Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey('key'));

