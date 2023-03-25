myArr = [
{

studenName: "jack",

studenClass: 6,

studenSection: "a"

},

{

studenName: "tom",

studenClass: 6,

studenSection: "a"

},

{

studenName: "ricky",

studenClass: 6,

studenSection: "b"

},{

studenName: "john",

studenClass: 6,

studenSection: "b"

},{

studenName: "jerry",

studenClass: 6,

studenSection: "a"

},{

studenName: "henry",

studenClass: 6,

studenSection: "b"

},{

studenName: "stephen",

studenClass: 6,

studenSection: "a"
}
]


let result=myArr.filter(function(value){
	return value.studenSection=== "a" && value.studenClass ===6;
});
console.log(result);