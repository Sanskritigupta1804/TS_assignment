function BankAccount(initialBalance = 0) {
  // Private variable 
  let balance = initialBalance;

  
  return {
    
    checkBalance: function () {
      return balance;
    },

   
    credit: function (amount) {
      balance += amount;
      return balance;
    },

   
    debit: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      }
      balance -= amount;
      return balance;
    }
  };
}


const account = BankAccount(100);

console.log(account.checkBalance());
account.credit(50);
console.log(account.checkBalance()); 
account.debit(70);
console.log(account.checkBalance()); 

console.log(account.balance); // undefined
