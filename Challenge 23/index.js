function json2Object(json) {
	json = JSON.parse(json);
	return json.title;
}
console.log(json2Object('{"title": "", "hidden": "yes"}'));
