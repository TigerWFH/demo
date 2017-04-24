// class Student {
// 	static radio = 123;
// 	static getRadio() {
// 		return radio;
// 	}
// 	setRadio() {
// 		Student.radio = 46;
// 	}
// }
function Student() {
}
Student.prototype.setRadio = () => {
	Student.radio = 456;
}
Student.radio = 123;
Student.getRadio = () => {
	return Student.radio;
}
let s = new Student();
console.log('origin--->', Student.getRadio());
s.setRadio();
console.log('new--->', Student.getRadio());