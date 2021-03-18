let a = ['2','/','1','x','3','+','4'];
let result =[];

class number {
	constructor(num, op){
		this.num = num;
		this.op = op;
	}
}
let i = 0
function calcultator(){

	// tang 1 dvi 
	if(i> a.length-1){
			break;
	}
	if(i == 0 || i== a.length-1){
			if("+-x/".includes(a[i])){
				console.log(" first char and last char can not be ops");
			}
			if(i == 0 && a[i]==")"){
				console.log(" no equation in closed bracket");
			}
			if(i == a.length && a[i] == '('){
				console.log(" last char can not open bracket");
			}
	}
	// if i khac 0 va index cua phtu cuoi cung, co the bang 0 nhung la number
	else{
		if(i == 0){
			let new_num = new number(parseInt(a[i]), a[i+1])
		}



	}

}