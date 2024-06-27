var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
console.log(user.ref.name); // Joe
//เพราะJoeเป็นglobal variable และ ref: this ตัวนี้จะชี้ไปที่global variable เพราะว่าfunctionนี้ไม่ใช่medthodของObj ซึ่ง global variable มี name: `Joe` ทำให้user.ref.name ชี้ไปที่ Joe
