let a = ['2','/','1','x','3','+','4'];
/*
1. convert equation of string into number and operation conrresponding
2. using stack to hold order and result
- fisrt in-last out
- update result after check 2 sequence number and operator

*/
let result = [];

for(var i =0; i<a.length; i+=2){
	if(i==0 && "+-x/".includes(a[i])){
		
			console.log("type error");
			break;
		
	}
	if(("+-x/".includes(a[i-1]) && "+-x/".includes(a[i]))||("+-x/".includes(a[i+1]) && "+-x/".includes(a[i]))){
		console.log("type error");
		break;
	}
	else{
		if("+-x/".includes(a[i])){
			console.log("odd value");

		}else if (a[i]=='('){
			console.log("tinh em sau, doi day");

		}else{
			result.push(parseInt(a[i]));
			console.log(a[i]);
			// console.log(result);
			if(i>0){
				if(("+-".includes(a[i-1])&& "+-".includes(a[i+1]))||("x/".includes(a[i-1])&&"x/".includes(a[i+1]))){
					switch(a[i-1]){
							case '+':   result[result.length-2] = result[result.length-2]+result[result.length-1];
									    result.slice(0,-1);
									    break;
							case '-':   result[result.length-2] = result[result.length-2]-result[result.length-1];
										result.slice(0,-1);
										break;
							case 'x':   result[result.length-2] = result[result.length-2]*result[result.length-1];
										result.slice(0,-1);
										break;
							case '/':   
										result[result.length-2] = result[result.length-2]/result[result.length-1];
										result = result.slice(0,-1);
										break;
					}

				}
				// else if(){

				// }

			}
		}
		console.log(result);

	}
	
}