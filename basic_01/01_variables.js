const accountId = 12345;
let email = "nishadpramod.001@gmail.com";
var accountPassword = "123";
var accountCity = "Lucknow";
let accountState;

email =  "test@gmail.com";
accountPassword = "123456";
accountCity = "Benglore"

/*
prefer not to use var 
because of block scope and functional scope
*/


console.table([{accountId, email , accountPassword , accountCity, accountState}]);
console.table([accountId, email , accountPassword , accountCity, accountState]);

