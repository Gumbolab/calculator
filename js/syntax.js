let a = ['2','/','2','x','3','+','4'];
let result = [];

class number{
	constructor(num, op){
		// console.log("what num: "+num);
		this.num = num;
		this.op = op;
	}
}


function add_sub_mul_div(i){
	
	console.log("i am here: "+i);
	
	let new_num = new number(parseInt(a[i]),a[i+1]);
	result.push(new_num);
	switch(true){
		
			case ("+x/-".includes(a[i-1]) && "+-".includes(a[i+1]))||("x/".includes(a[i-1])&&"x/".includes(a[i+1])):
					solved();
					// cung cap, or nha chia trc cong tru sau
					
			case "+-".includes(a[i-1]) && "x/".includes(a[i+1]):
				// con tru trc, nhan chia sau

					return i;


	}
	return i;
	
}
function main(){

}