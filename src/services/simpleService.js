const _ = require('lodash')

module.exports = {
	compare: (a, b) => compare(a, b),
	verifyArray: (array) => verifyArray(array)
}

const compare = (a, b) => {
	return _.isEqual(a, b)
}

const verifyArray = (array) => {
	return array && array.length > 0
}
