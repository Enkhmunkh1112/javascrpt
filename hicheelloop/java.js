// let n = prompt("too oruulnuu")
// for (let i = 1; i <= n; i++) {
//   console.log("loop" + i);
// }

// let l = prompt("too oruulnuu")

// for (let r = l; r > 0; r--) {
//     console.log("looop"+r)
// }

// let t = prompt("input num")

// let nillber = 0;

// for (let y = 1; y <= t;  y++) {
//     nillber=nillber+y
// }

// alert(nillber)

// let t = prompt("input num")

// let nillberr = 0;

// for (let y = 2; y <= t;  y+=2) {
//     nillberr=nillberr+y
// }

// alert(nillberr)

// let u = prompt("numbers pls")

// let a =0;

// for (let u = 1; u < u; u++) {

//     if(u%3==0 || u%5==0){a=a+u}
// }
// alert(u)

// for (let d = 1; d < 10; d++) {
//     if(d % 3 === 0) {
//         continue
//     }else{console.log("loop" + d)}
// }

// h = prompt("too oruul");

// let h = prompt("please numbers")

// for (let j = 0; j < h; j++) {

// }

// let g = prompt("lol")
// let l = "*"
// let k = "*"

// for (
//  let h = 1; h < g; h++
//  ) {

//     console.log(l=l+k)

// }

// let z = prompt("plz me need numbas");

// for (let x = 0; x < z; x++) {
//   if (x % 2 !== 0 || x % 3 !== 0 || x % 5 !== 0 || x % 7 !== 0) {
//     ;
//   }
// }

// let fruits = "apple,orange,kiwi"

// console.log(fruits)

// console.log(
//   fruits.split(',')
// )

// let fruits2 = prompt("jimsnii ner pls");

// let array=fruits2.split(' ')

// fruits2.push("banana");

// console.log(fruits2);

// let nothing = []

// nothing.push('nothing1,nothing2,nothing3')

// console.log(nothing)

// let popper = prompt("pls words")

// popper.prompt(",")

// console.log(popper)

// let ani = prompt["name animals"];

// ani.splice(1, 2);

// let ww = prompt('numbers please');

// ww = ww.split(',').map(num => num.trim());

// for (let qq = 0; qq < ww.length; qq++) {

//     console.log(ww[qq]);
// }

// let ee = prompt("3-t huvaagddag baigaag ogoi");

// ee = ee.split(",").map((num) => num.trim());

// for (let rr = 1; rr < ee.length; rr++) {
//   if (rr % 3 === 0) {
//     alert(rr);
//     continue
//   } else {

//   }
// }

// let tt = prompt('too-g 3 ba 5 t huvaagddagu toonuudiig songoi')

// for (let yy = 1; yy < tt.length; yy++) {
//     if (yy % 3 ===0 || yy % 5 === 0){}
// }
let suragch = prompt("A, B, C, D ,F hemjeesuudiig oruulna uu.").toUpperCase();
const students = [
  { name: "Alice", point: 90 },
  { name: "Bob", point: 55 },
  { name: "Charlie", point: 78 },
  { name: "David", point: 22 },
  { name: "Eve", point: 68 },
  { name: "Frank", point: 36 },
  { name: "Grace", point: 95 },
  { name: "Hannah", point: 89 },
  { name: "Ivy", point: 83 },
  { name: "Jack", point: 41 },
  { name: "Katie", point: 87 },
  { name: "Liam", point: 84 },
  { name: "Mia", point: 79 },
  { name: "Noah", point: 93 },
  { name: "Olivia", point: 86 },
  { name: "Peter", point: 57 },
  { name: "Quinn", point: 94 },
  { name: "Ryan", point: 80 },
  { name: "Sophia", point: 75 },
  { name: "Tyler", point: 46 },
];
let dun = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].point > 100 && students[i].point <= 90 && suragch == "A") {
    dun.push(students[i].name);
  } else if (
    students[i].point >= 80 &&
    students[i].point < 90 &&
    suragch == "B"
  ) {
    dun.push(students[i].name);
  } else if (
    students[i].point >= 70 &&
    students[i].point < 80 &&
    suragch == "C"
  ) {
    dun.push(students[i].name);
  } else if (
    students[i].point >= 60 &&
    students[i].point < 70 &&
    suragch == "D"
  ) {
    dun.push(students[i].name);
  } else if (
    students[i].point >= 0 &&
    students[i].point < 60 &&
    suragch == "F"
  ) {
    dun.push(students[i].name);
  }
}
alert(dun);
