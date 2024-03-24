// Concatinating text strings 
document.getElementById("concatinateSomeStrings").onclick = function () {
    let message = "Assalam-u-Alaikum ";
    let name = "Everyone";
    let banger = "!";
    alert(message + name + banger)
}

//  Prompt and if statements 
document.getElementById("askNameFromUser").onclick = function () {
    let message = "Have Fun! "
    let firstName = prompt("Please enter your first name")
    let lastName = prompt("Please enter your last name")
    let fullName = message + firstName + lastName;
    document.getElementById('statement').innerHTML = 'message + firstName + lastName';
    document.getElementById('output').innerHTML = fullName;
    document.getElementById('userName').innerHTML = fullName;
}
// Comparison Values
document.getElementById("comparisonOperators").onclick = function () {
    // Double Equal Sign / ==
    let firstValue = prompt('Enter the first value')
    let secondValue = prompt('Enter the second value')
    if (firstValue == secondValue) {
        alert('Yes, Number-1 == Number-2')
    }
    else {
        alert('The values are not equal')
    }
    // 3 Equal Sign / ===
    let firstNum = prompt('Enter the first number')
    let secondNum = prompt('Enter the second number')
    if (firstNum === secondNum) {
        alert('Yes, Number-1 === Number-2')
    }
    else {
        alert('Your are not correct')
    }
    // // Not Operator / !=
    let num1 = prompt('Enter the num1')
    let num2 = prompt('Enter the num2')
    if (num1 != num2) {
        alert('Yes, Number-1 != Number-2')
    }
    else {
        alert('Your are wrong')
    }
    // // Not Operator / !=
    let num01 = prompt('Enter the Number 1')
    let num02 = prompt('Enter the Number 2')
    if (num01 >= num02) {
        alert('Yes, Number-1 >= Number-2')
    }
    else {
        alert('Your are wrong')
    }
    document.getElementById("statement").innerHTML = 'Value-1 == Value-2 <br> Number-1 === Number-2  <br> Number-1 != Number-2 <br> Number-1 >= Number-2';
}
// if else if
document.getElementById('ifElseIF').onclick = function () {
    let age = prompt('Please enter the age')
    let grade = prompt('Please enter the grade')
    if (age >= 18) {
        alert('Your are eligible')
    }
    else if (grade >= 12) {
        alert('You Passed')
    }
    else {
        alert('Please try again later')
    }
}

// Testing conditions operators
document.getElementById('testingSetsOfConditions').onclick = function () {
    let age = prompt('Please enter your age ')
    let height = prompt('Please enter your height')
    let weight = prompt('Please enter your weight')
    if (age >= 18 || height >= 5.7 && weight <= 60) {
        alert('Your are eligible')
    }
    else {
        alert('Your are not eligible')
    }
}

// if Statements Nested 
document.getElementById('ifStatementsNested').onclick = function () {
    let age = prompt('Please enter your current age')
    if (age >= 18) {
        let weight = prompt('Your weight')
        let height = prompt('Your height')
        if (weight <= 60 && height >= 5.7) {
            alert("You're growing well")
        }
        else {
            alert("Do not over do anything")
        }
    }
    else {
        alert("You are not available")
    }
}


// Login
document.getElementById('login').onclick = function () {
    let user = prompt('Please enter your username')
    let password = +prompt('Please enter your password')
    if (user == 'Ali Zohaib' && password == '123456789') {
        alert('User logged in')
    }
    else {
        alert('Username and password are wrong')
    }
}
// Original Statement Clear Button
document.getElementById("clearStatementButton").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}

// Output Clear Button
document.getElementById("clearOutputButton").onclick = function () {
    document.getElementById("output").innerHTML = ""
}