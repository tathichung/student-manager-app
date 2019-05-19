var readlineSync = require('readline-sync');
var fs = require('fs');
function showMenu() {
    console.log('1. Show all student');
    console.log('2. Create a new student');
    console.log('3. Save and exit ');
    }
var students=[];
function loadData(){
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}
function showStudent() {
    
}


function main() {
    loadData();
    showMenu();
   var option = readlineSync.question('>');
   switch (option){
       case '1':
           showStudent;
           break;
        case '2': 
           showCreateStudent;
           break;
        case '3':
            saveAndExit;
            break;
    default: console.log('wrong option');
            break;

   } 
}
main();