class Switch {
	#cases = [];
	#conditions = [];
	
	add(condition, callback) {
		if (typeof condition !== 'boolean') return
		
		this.#conditions.push(condition);
		this.#cases.push(callback);
	}
	
	validate() {
		for (let i in this.#cases) {
			if (this.#conditions[i]) this.#cases[i]();
		}
		return;
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

formChecker.validate();