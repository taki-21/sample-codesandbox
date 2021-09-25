/**
 * const, let等の変数宣言
 */

// var val1 = "hello";
// console.log(val1);

// // var変数は上書き可能
// val1 = "world";
// console.log(val1);

// // var変数は再宣言可能

// var val1 = "take a minute";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数は上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"

// const val3 = "const変数"
// console.log(val3)

// // const変数は上書き不可能
// // val3 = "const変数を上書き"

// const val3 = "const変数を再宣言"

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "aiu",
//   age: 28
// };
// // console.log(val4);

// val4.name = "kkk";
// val4.address = "Hirosima"
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */

// const name = "taki";
// const age = 24;

// // 私の名前はtakiです。年齢は24歳です。

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `僕は${name}です。年齢。${age}です・`
// console.log(message2)

/**
 * アロー関数
 */

//  function func1(str){
// //    return str + '1'
// //  }
// const func1 = function(str){
//   return str
// }
//  console.log(func1('hedddllo'))

// アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("helloaa"));

// const plus = (number1, number2) => {
//   return number1 + number2;
// };

// console.log(plus(10, 3));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "taki",
//   age: 24
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;

// console.log(message2);

// const myProfile = ["taki", 24];
// const message3 = `名前fasdfaは${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `ddd名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "taiki") => {
//   console.log(`こんにちは!${name}さん`);
// };

// sayHello('taki')

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1)

// 一つにまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20]
// const arr5 = [30, 40]
// // const arr6 = [...arr4]
// // console.log(arr6)

// // const arr7 = [...arr4, ...arr5]
// // console.log(arr7)

// const arr8 = arr4
// console.log(arr8)

// arr8[0] = 100
// console.log(arr8)
// console.log(arr4)

// let num1 = 10
// // const num2 = 20

// let num2 = num1
// console.log(num2)

// num2 = 1
// console.log(num2)
// console.log(num1)
// confirm.log(num1)

//（参照渡し、ミュータブル、イミュータブル）

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// 各要素に処理を行い新しい配列を生成する
// const nameArr2 = nameArr.map((name)=> {
//   return name
// })
// console.log(nameArr2)

//配列をループして要素にたいして何か処理をする
// nameArr.map((name, idx) => {
//   console.log(`${idx}: ${name}`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// // 新しい配列を生成 パターン
// const newNameArr = nameArr.map((name) => {
//   if(name === "佐藤"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr)

/**
 * 三項演算子
 */

// ある条件 ? true: false
// const val1 = 1 < 0 ? 'trueです' : 'falseです'
// console.log(val1)

// const num = 1300
// // console.log(num.toLocaleString())

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100以上" : "100以下です";
// };

// console.log(checkSum(80, 15))

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true
// const flag2 = false
// if (flag1 || flag2){
//   console.log("1か2はtrue")
// }
// if (flag1 && flag2){
//   console.log("1も2もtrue")
// }

// || は左側がfaleなら右を返す
const num = 100;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がtrueなら右を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
