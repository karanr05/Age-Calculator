
let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear()

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1 ;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 -d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
     result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;  
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

// SIMPLE UNDERSTANDING CODE

// Define a function named calculateAge that takes a birthdate as input
// function calculateAge(birthdate) {
     // Get the current date
//     const currentDate = new Date();
  
     // Extract the birth year, month, and day from the birthdate
//     const birthYear = birthdate.getFullYear();
//     const birthMonth = birthdate.getMonth();
//     const birthDay = birthdate.getDate();
  
     // Extract the current year, month, and day from the current date
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth();
//     const currentDay = currentDate.getDate();
  
     // Calculate the age by subtracting the birth year from the current year
//     let age = currentYear - birthYear;
  
     // Check if the birth month is greater than the current month
//     if (currentMonth < birthMonth) {
//       // If the birth month is greater, decrement the age by 1
//       age--;
//     }
//     // If the birth month is the same as the current month, check the day
//     else if (currentMonth === birthMonth && currentDay < birthDay) {
//       // If the birth day is greater, decrement the age by 1
//       age--;
//     }
  
    // Return the calculated age
//     return age;
//   }
  
    // Example usage:
//   const birthdate = new Date('1990-09-15'); // Replace with the birthdate you want to calculate the age for
//   const age = calculateAge(birthdate);
//   console.log(`You are ${age} years old.`);
  