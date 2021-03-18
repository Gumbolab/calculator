let a = ['2','/','1','x','3','+','4'];
let result = [];
function add_sub_nul_div(i){
	result.push(parseFloat(a[i]));
	switch(true){
		case ("+x/-".includes(a[i-1]) && "+-".includes(a[i+1]))||("x/".includes(a[i-1])&&"x/".includes(a[i+1])):
				let bieu_thuc = toString(result[result.length-2])+a[i-1]+toString(result[result.length-1])
				result[result.length-2] = eval(bieuthuc);
				result =  result.slice(0,-1);
				return i;
				
		case "+-".includes(a[i-1]) && "x/".includes(a[i+1]):
				i = i+2;
				add_sub_nul_div(i);


	}
}