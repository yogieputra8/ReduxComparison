const people = [
	{ name: 'Kevin', age: 2 },
	{ name: 'Bob', age: 3 },
	{ name: 'Natasha', age: 1 },
	{ name: 'Nick', age: 8 }
]

export default () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			return resolve(people)
		}, 3000)
	})
}