// var a= 'sudheer';
// var b='naik'

// console.log('💕--->',a+b);
// let a =4
// let b=10
//                       console.log(` Before swapping -->value of a=${a},b=${b}`);
// //  output a=10,b=4
// let c=b   // c=10
// b=a;
// a=c
// console.log(` after swapping  -->value of a=${a},b=${b}`);/
// let leap_year = parseInt(prompt("Enter a year"));
// // ❎
// if (leap_year % 4 == 0) {
//   alert("this is leap year");
// } else {
//   alert("not a leap year");
// // }

// let obj=[
//     {
//       id: 1,
//       name: "Object 1",
//       description: "This is object 1",
//       class:'a'
//     },
//     {
//       id: 2,
//       name: "Object 2",
//       description: "This is object 2",

//     },
//     {
//       id: 3,
//       name: "Object 3",
//       description: "This is object 3",
//       class:'a'
//     },
//     {
//       id: 4,
//       name: "Object 4",
//       description: "This is object 4",

//     },
//     {
//       id: 5,
//       name: "Object 5",
//       description: "This is object 5",
//       class:'a'
//     }
//   ]
//   let array1=new Array;
//   for (let items of obj){
//   let key1_a=items.class?items['class']:"not element present";
//   array1.push(key1_a)
//   }
//   console.log(array1);


/////////// ✔️ CAPTCH  validation ✔️//////////////////

function generateCaptcha() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var captcha = "";
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    captcha += charset[randomIndex];
  }
  document.getElementById("captha").textContent = captcha;
  document.getElementById("main").textContent = "Please type above captha";
}

function check() {
  let Entered_Text = document.getElementById("entered_text");
  Entered_Text = Entered_Text.value;
  console.log(Entered_Text);

  let c1 = document.getElementById("captha");
  c1 = c1.textContent;
  console.log("hi---😒", c1);
  if (Entered_Text == c1) {
    alert("success-->captch matching");
  } else {
    alert("captch not matching please try again");
  }
}
////////////////////////////////////////////////////////////////////