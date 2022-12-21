// Given is an object object. Return a clone of the object expect the object properties given in the array removeProperties (set property to undefined).

function cloneObject(object, removeProperties) {
	if (removeProperties.length === 0) {
		return object;
	}

	for (let i = 0; i < removeProperties.length; i++) {
		if (object.hasOwnProperty(removeProperties[i])) {
			delete object[removeProperties[i]];
		}
	}

	return object;
}

console.log(cloneObject({"name":"Iron Man","age":42,"superPower":"None","friends":0,"overweight":true,"hungry":true}, ["overweight","hungry"]));