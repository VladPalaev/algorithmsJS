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
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
*/

function topSalary(obj) {
	let maxSalary = Object.entries(obj)
					.reduce((inifial, [key, value]) => value > inifial ? inifial = value : inifial, 0)
	
	return Object.entries(obj).find(([key, value]) => value === maxSalary)[0]
	
}

function alternativeTopSalary(salaries) {

	let max = 0;
	let maxName = null;

	for(const [name, salary] of Object.entries(salaries)) {
	  if (max < salary) {
		max = salary;
		maxName = name;
	  }
	}

	return maxName;
}
/*
Задача 3
*/