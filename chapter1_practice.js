/* YDKJS - Up & Going 
	Chapter 1 Practice
	https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch1.md
	@author Jim Minutella

Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.

After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if you can afford it or not.

You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""

You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

*/ 

const TAX_RATE = 0.07;
const PHONE_PRICE = 199.99;
const ACCESSORY_PRICE = 19.99;
const SPENDING_THRESHOLD = 500;

var bankAccountBalance,
    amount = 0,
		totalPrice,
		phonesPurchased = 0,
		accessoriesPurchased = 0;
		
// Calculate Tax
function calculateTax(amount) {
  return amount = (amount * TAX_RATE) + amount;
}

// Format the Total 
function formatTotalPrice(total) {
   return total = '$' + total.toFixed(2);
}

// Show the parameters
function introScreen() {
	console.log('Lets buy some phones. We will buy phones until we run out of money');
	console.log('The tax rate is ' + TAX_RATE + '%');
	console.log('The price of the phone is $' + PHONE_PRICE);
	console.log('The accessory price is $' + ACCESSORY_PRICE);
	console.log('Your spending threshold is $' + SPENDING_THRESHOLD);
}

introScreen();

bankAccountBalance = prompt('What is the current balance in your bank account?'); 

while (amount < bankAccountBalance) {
  
	// Current amount
  amount += PHONE_PRICE;
  phonesPurchased++;
	
  // Do you want the accessory? 
  if (amount < SPENDING_THRESHOLD) {
     amount += ACCESSORY_PRICE;
     accessoriesPurchased++;	   
  } else {
      console.log('You have hit your spending threshold');
   }
	 
     amount = calculateTax(amount);
  
	   totalPrice = formatTotalPrice(amount);
	   
		 console.log('You have purchased ' + phonesPurchased + ' phones and ' + accessoriesPurchased + ' accessories.');
		 console.log('The total price is ' + totalPrice);	 
		 
	// If we run out of money
	if (amount > bankAccountBalance) {
		console.log('You don\'t have enough money in your bank account.');
	}	 

}


      