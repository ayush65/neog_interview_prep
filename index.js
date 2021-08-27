var variable = require('readline-sync');
const chalk = require('chalk');

function playGAme(question,answer){
  var Userans = variable.question(question);

  if (Userans === answer ){
    console.log(chalk.red('Dont believe things on Telegram ,FB and Whatsapp'));
    console.log(chalk.red("-----------------------------"));
    console.log(chalk.red("-----------------------------"));
   
  }

  else{
    console.log(chalk.blue('It is a true news'));
    console.log(chalk.blue("-----------------------------"));
    console.log(chalk.blue("-----------------------------"));

  }

}

playGAme("Where is the news from  ?  ","facebook");

playGAme("Where is the news from  ?  ","telegram");


playGAme("Where is the news from  ?  ","whatsapp");

playGAme("Where is the news from  ?  ","facebook");








