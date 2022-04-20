// --------------------------------------------------------------------------------- //
// TEST ARRAYS


const MyArray = [1,2,3,4,5,6,7,8,9,10]
const SecondMyArray = [1,2,3,4,5,6,7,8,9,10]

// --------------------------------------------------------------------------------- //

Function.prototype.MyCall = function(obj, ...args) {
  obj.fn = this;
  return obj.fn(...args);
}


// FOREACH
Array.prototype.MyForEach = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  for (let i = 0 ; i < this.length ; i++) {
    callbackFn.MyCall(thisArg, this[i], i, this);
  }
}

// MAP
Array.prototype.MyMapFunction = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callbback is not a function');
  let NewArray = [];
  for (let i = 0 ; i < this.length ; i++) {
    NewArray.push(callbackFn.MyCall(thisArg, this[i], i, this))
  }
  return NewArray;
}

// FILTER
Array.prototype.MyFilterFunction = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  let NewArray = []
  for (let i = 0 ; i < this.length ; i++) {
    if (callbackFn.MyCall(thisArg, this[i], i, this)) {
      NewArray.push(this[i])
    }
  }
  return NewArray
}

// FIND
Array.prototype.MyFind = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  for (let i = 0 ; i < this.length; i++) {
    if (callbackFn.MyCall(thisArg, this[i], i, this)) {
      return this[i]
    }
  }
  return undefined
}

// FIND INDEX
Array.prototype.MyFindIndex = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  for (let i = 0 ; i < this.length; i++) {
    if (callbackFn.MyCall(thisArg, this[i], i, this)) {
      return i
    }
  }
  return -1 
}

// SOME
Array.prototype.MySome = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  for (let i = 0 ; i < this.length; i++) {
    if (callbackFn.MyCall(thisArg, this[i], i, this)) {
      return true
    }
  }
  return false
}

// EVERY
Array.prototype.MyEvery = function(callbackFn, thisArg = this) {
  if (typeof callbackFn !== 'function') throw new TypeError('Callback is not a function');
  for (let i = 0 ; i < this.length; i++) {
    if (!callbackFn.MyCall(thisArg, this[i], i, this)) {
      return false
    }
  }
  return true
}

// INCLUDES
Array.prototype.MyIncludes = function(searchElement, fromIndex = 0) {
  if (fromIndex < 0) throw new RangeError('Negative Index');
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) return true;
  }
  return false;
}

// REDUCE
Array.prototype.MyReduce = function(callbackFn, initialValue) {
  if (this == null || typeof callbackFn !== 'function') throw new TypeError();
  let index = 0;
  let value = initialValue ? initalValue : this[index];
  if (value === this[index]) index ++;
  while (index  < this.length) {
    value = callbackFn(value, this[index], index, this)
    index++;
  }


  return value;
}
