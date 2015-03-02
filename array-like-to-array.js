function toArray(obj) {
	var args = Array.prototype.slice.call(obj);
	return args;
}

toArray(1,2,'hi there');
