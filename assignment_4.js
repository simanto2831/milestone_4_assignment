// first
function calculateMoney(ticketSale) {
  const ticketPrice = 120;
  const watchManCost = 500;
  const staffMealCost = 8 * 50;

  if (ticketSale >= 0) {
    let income = ticketSale * ticketPrice - (watchManCost + staffMealCost);
    return income;
  } else {
    return "Please provide right amount of selling ticket";
  }
}

// second
function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    let nameLastLetter = name.charAt(name.length - 1);

    if (
      nameLastLetter === "a" ||
      nameLastLetter === "y" ||
      nameLastLetter === "i" ||
      nameLastLetter === "e" ||
      nameLastLetter === "o" ||
      nameLastLetter === "u" ||
      nameLastLetter === "w"
    ) {
      return "Good Name";
    } else {
      return "Bad Name";
    }
  }
}

// third
function deleteInvalids(array) {
  if (Array.isArray(array)) {
    let numberArr = [];
    for (const item of array) {
      if (typeof item === "number" && !Number.isNaN(item)) {
        numberArr.push(item);
      }
    }
    return numberArr;
  } else {
    return "Invalid Array";
  }
}

// fourth
function password(obj) {
  for (const item in obj) {
    if (obj.name && obj.birthYear && obj.siteName) {
      const birthYearString = obj.birthYear.toString();

      if (birthYearString.length === 4) {
        const passResult = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
        return passResult.charAt(0).toUpperCase() + passResult.slice(1);
      } else {
        return "invalid";
      }
    } else {
      return "invalid";
    }
  }
}

// fifth
function monthlySavings(arr, livingCost) {
  let paymentArr = [];
  for (const payment of arr) {
    if (payment > 3000) {
      paymentArr.push(Math.round(payment * 0.8));
    } else {
      paymentArr.push(payment);
    }
  }

  let paymentArrSum = 0;
  for (amount of paymentArr) {
    paymentArrSum += amount;
  }

  let savings = paymentArrSum - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
