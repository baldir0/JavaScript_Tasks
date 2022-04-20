// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
// Call Zamiast tablicy, przyjmuje ciąg argumentów
// Służy do => Zmiana Wartości this
const myCall = function (fn, obj, ...args) {
	obj.fn = fn;
	return obj.fn(...args);
};

// Validate methods
const isFunction = (fn) => (typeof fn === 'function' ? true : false);
const isArray = (ar) => (Array.isArray(ar) ? true : false);

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
const myForEach = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" must be an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" must be a function');
	thisArg = thisArg || array; // If undefined -> thisArg = array
	for (let i = 0; i < array.length; i++) {
		myCall(callback, thisArg, array[i], i, array);
	}
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const myMapFunction = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(myCall(callback, thisArg, array[i], i, array));
	}
	return newArray;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const myFilterFunction = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (myCall(callback, thisArg, array[i], i, array)) newArray.push(array[i]);
	}
	return newArray;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const myFind = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	for (let i = 0; i < array.length; i++) {
		if (myCall(callback, thisArg, array[i], i, array)) return array[i];
	}
	return -1;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const myFindIndex = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	for (let i = 0; i < array.length; i++) {
		if (myCall(callback, thisArg, array[i], i, array)) return i;
	}
	return -1;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/some
const mySome = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	for (let i = 0; i < array.length; i++) {
		if (myCall(callback, thisArg, array[i], i, array)) return true;
	}
	return false;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/every
const myEvery = function (array, callback, thisArg) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	thisArg = thisArg || array;
	for (let i = 0; i < array.length; i++) {
		if (!myCall(callback, thisArg, array[i], i, array)) return false;
	}
	return true;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
const myIncludes = function (array, searchElement, fromIndex) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	let startingFrom = fromIndex || 0;
	if (startingFrom < 0) {
		startingFrom = array.length + startingFrom;
	}
	console.log(startingFrom);
	for (let i = startingFrom; i < array.length; i++) {
		console.log(i);
		if (array[i] === searchElement) return true;
	}
	return false;
};

// https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const myReduce = function (array, callback, initialValue) {
	if (!isArray(array)) throw new TypeError('"array" is not an array');
	if (!isFunction(callback))
		throw new TypeError('"callback" is not a function');
	if (!array.length && !initialValue) throw new TypeError('Empty Array');
	if (array.length === 1 && !initialValue) return array[0];
	if (!array.length && initialValue) return initialValue;

	let idx = 0,
		value = initialValue || array[idx];
	if (value === array[idx]) idx++;
	for (let i = idx; i < array.length; i++) {
		value = callback(value, array[i], i, array);
	}
	return value;
};
