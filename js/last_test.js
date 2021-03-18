
let a = ['2','/','2','x','3','+','4'];
let result = [];

class number{
	constructor(num, op){
		// console.log("what num: "+num);
		this.num = num;
		this.op = op;
	}
}

function solved(){
	// sau khi push number obj vao stack
	console.log("solved here: "+result[result.length-2].op);
	switch(result[result.length-2].op){
		case '+':
			result[result.length-2].num = result[result.length-2].num+result[result.length-1].num;
			result[result.length-2].op = result[result.length-1].op;
			break;
			// pop stack
		case '-':
			result[result.length-2].num = result[result.length-2].num-result[result.length-1].num;
			result[result.length-2].op = result[result.length-1].op;
			break;
		case 'x':
			result[result.length-2].num = result[result.length-2].num*result[result.length-1].num;
			result[result.length-2].op = result[result.length-1].op;
			break;
		case '/':
			result[result.length-2].num = result[result.length-2].num/result[result.length-1].num;
			result[result.length-2].op = result[result.length-1].op;
			break;
	}
	result = result.slice(0,-1);

}





function add_sub_mul_div(i){
	
	
	console.log("i am here: "+i);
	
	let new_num = new number(parseInt(a[i]),a[i+1]);
	result.push(new_num);
	console.log(result);
	// console.log(a[i-1]);
	switch(true){
		case ("+x/-".includes(a[i-1]) && "+-".includes(a[i+1]))||("x/".includes(a[i-1])&&"x/".includes(a[i+1])):
				solved();

				// i = i+2;
				
				// console.log("here or not: ");
				// console.log(result);
				// add_sub_mul_div(i);
			
				return i;
				
		case "+-".includes(a[i-1]) && "x/".includes(a[i+1]):
				i = i+2;
				console.log("sub i: "+i);
				add_sub_nul_div(i);
				return i;


	}
	return i;
	
}

let i = 0;
while(i<a.length)
{
			console.log(" gia tri i : "+i);
			if(i==0 && "+-x/".includes(a[i])){
				console.log("type error");
				break;
			}
			if(("+-x/".includes(a[i-1]) && "+-x/".includes(a[i]))|| ("+-x/".includes(a[i])&&"+-x/".includes(a[i+1]))){
				console.log("type error");
				break;

			}
			else{
							if("+-x/".includes(a[i])){
										// tang moi buoc 1 don vi, neu gap op thi tang 1
										i=i+1;
										console.log("tinh sau")
									// }else if(a[i]=='('){
									// 	i=i+1;
									// 	// giai quyet sau
									// 	while(a[i]!=')')
									// 	{
									// 		// add_sub_mul_div(i);// 
									// 		// console.log(result);
									// 	}


							}else{//number
								
										i= add_sub_mul_div(i);// moi buoc tang 2 dvi




							}
						}
			console.log("co tang hay khong: "+i);
			i=i+2;

}



