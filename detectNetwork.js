// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var dinersClub = function(cardNumber) {
  var dinersClubPrefix = cardNumber.slice(0, 2);
  var prefixMatch = (dinersClubPrefix === '38' || dinersClubPrefix === '39');
  var lengthMatch = cardNumber.length === 14;
  return prefixMatch && lengthMatch ? true : false;
};

var americanExpress = function(cardNumber) {
  var americanExpressPrefix = cardNumber.slice(0, 2);
  var prefixMatch = (americanExpressPrefix === '34' || americanExpressPrefix === '37');
  var lengthMatch = cardNumber.length === 15;
  return prefixMatch && lengthMatch ? true : false;
};

var visa = function(cardNumber) {
  var visaPrefix = cardNumber.slice(0, 1);
  var prefixMatch = (visaPrefix === '4' && cardNumber.slice(0, 4) !== '4903' && cardNumber.slice(0, 4) !== '4905' && cardNumber.slice(0, 4) !== '4911' && cardNumber.slice(0, 4) !== '4936');
  var lengthMatch = (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19);
  return prefixMatch && lengthMatch ? true : false;
};

var mastercard = function(cardNumber) {
  var mastercardPrefix = cardNumber.slice(0, 2);
  var prefixMatch = (51 <= mastercardPrefix && mastercardPrefix <= 55);
  var lengthMatch = cardNumber.length === 16;
  return prefixMatch && lengthMatch ? true : false;
};

var discover = function(cardNumber) {
  var discoverPrefix = [cardNumber.slice(0, 2), cardNumber.slice(0, 3), cardNumber.slice(0, 4)];
  var prefixMatch = false;
  var lengthMatch = (cardNumber.length === 16 || cardNumber.length === 19);
  discoverPrefix.forEach(function(prefix) {
    if (prefix === '65' || (644 <= parseInt(prefix) && parseInt(prefix) <= 649) || prefix === '6011') {
      prefixMatch = true;
    }
  });
  return prefixMatch && lengthMatch ? true : false;
};

var maestro = function(cardNumber) {
  var maestroPrefix = cardNumber.slice(0, 4);
  var prefixMatch = (maestroPrefix === '5018' || maestroPrefix === '5020' || maestroPrefix === '5038' || maestroPrefix === '6304');
  var lengthMatch = (12 <= cardNumber.length && cardNumber.length <= 19);
  return prefixMatch && lengthMatch ? true : false;
};

var chinaUnionpay = function(cardNumber) {
  var chinaUnionpayPrefix = [cardNumber.slice(0, 3), cardNumber.slice(0, 4), cardNumber.slice(0, 6)];
  var prefixMatch = false;
  var lengthMatch = (16 <= cardNumber.length && cardNumber.length <= 19);
  chinaUnionpayPrefix.forEach(function(prefix) {
    if ((624 <= parseInt(prefix) && parseInt(prefix) <= 626) || (6282 <= parseInt(prefix) && parseInt(prefix) <= 6288) || (622126 <= parseInt(prefix) && parseInt(prefix) <= 622925)) {
      prefixMatch = true;
    }
  });
  return prefixMatch && lengthMatch ? true : false;
}

var switchNetwork = function(cardNumber) {
  var switchPrefix = [cardNumber.slice(0, 4), cardNumber.slice(0, 6)];
  var prefixMatch = false;
  var lengthMatch = (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19);
  switchPrefix.forEach(function(prefix) {
    if (prefix === '4903' || prefix === '4905' || prefix === '4911' || prefix === '4936' || prefix === '6333' || prefix === '6759' || prefix === '564182' || prefix === '633110') {
      prefixMatch = true;
    }
  });
  return prefixMatch && lengthMatch ? true : false;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if (dinersClub(cardNumber)) {
    return 'Diner\'s Club';
  } else if (americanExpress(cardNumber)) {
    return 'American Express';
  } else if (visa(cardNumber)) {
    return 'Visa';
  } else if (mastercard(cardNumber)) {
    return 'MasterCard';
  } else if (discover(cardNumber)) {
    return 'Discover';
  } else if (maestro(cardNumber)) {
    return 'Maestro';
  } else if (chinaUnionpay(cardNumber)) {
    return 'China UnionPay';
  } else if (switchNetwork(cardNumber)) {
    return 'Switch';
  } else {
    return 'Credit card network was not found.';
  }
};
