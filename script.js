const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
var key=sampleObject.hasOwnProperty('key');
return key;
}

Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
