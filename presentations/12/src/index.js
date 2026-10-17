// Демо к презентации про npm: используем библиотеку lodash, установленную через npm.
const _ = require("lodash");

const scores = [72, 85, 90, 64, 85, 78];

console.log("Среднее:", _.mean(scores));
console.log("Максимум:", _.max(scores));
console.log("Уникальные значения:", _.uniq(scores));
console.log("Группы по 2:", _.chunk(scores, 2));
