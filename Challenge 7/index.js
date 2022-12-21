function http2https(url) {
	return url.replace('http', 'https');
}

console.log(http2https('http://jscodebox.com:80/home?admin=1&test=0'));