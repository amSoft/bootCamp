import {suma, multiplica} from "./controller.js"
import chalk from 'chalk';

console.log(suma(1,2));
console.log(multiplica(4,5));

//Utilizando la librería Chalk
console.log(chalk.green("1 + 2 = " + suma(1,2)));
console.log(chalk.green("4 * 5 = "+multiplica(4,5)));