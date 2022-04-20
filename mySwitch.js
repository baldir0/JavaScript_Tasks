class Switch {
	cases = [];
	conditions = [];
	
	add(condition, callback) {
		if (typeof condition !== 'boolean') throw new Error('Condition expected to be a boolean')
		if (typeof callback !== 'function') throw new Error('Callback expected to be a function')
		
		this.conditions.push(condition);
		this.cases.push(callback);
	}
	
	validate() {
		let res = true;
		while(this.cases.length) {
			if (this.conditions.pop()) {
				this.cases.pop()();
				res = false;
			}
		}
		return res;
	}
}

const formChecker = new Switch()
const value = 'test'

formChecker.add(!value.includes('@'), ()=>{
	console.error('Value is not an email')
})

formChecker.add(value.length < 5, ()=>{
    console.error('value is to short')
})

console.log(formChecker.validate());
console.log(formChecker.cases.length)