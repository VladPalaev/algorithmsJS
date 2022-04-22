/*
Задача 1 
Найти уникальное число среди парных чисел.
input: let list = [2, 4, 2, 4, 1];
output: 1;
*/
function getUniqueNumber(arr) {
	return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num))
};

function alternativeGetUniqueNum(arr) {
	let result = arr.reduce((inifial, number) => {
		!inifial[number] ? inifial[number] = 1 : inifial[number]++;
		return inifial;
	}, {});

	return Object.keys(result).find((key) => result[key] === 1);
};

/*
Задача 2

*/