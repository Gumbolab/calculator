import {convert_to_postfix,reverse_polish} from './bracket_process.js';



let list_of_ops = document.getElementsByClassName('ops');
let list_of_nums = document.getElementsByClassName('nums');
let res = document.getElementById('res');
let clr = document.getElementsByClassName('clr');
let btn_equal = document.getElementById('eql');
let result_res = document.getElementById("re_res");
console.log('here i am: '+btn_equal);
let arr_equation=[0];

function show_res(str){
			res.innerHTML+=str;
}
function if_nums_pressed(){
	for(var i=0; i<list_of_nums.length;i++){
		let btn_num = list_of_nums[i];
		btn_num.onclick = () =>{
			show_res(btn_num.innerHTML);
			// push number type by input user as string in arr of equation
			// last elemnt may be 0 number
			if(arr_equation[arr_equation.length-1]==0){
				arr_equation[arr_equation.length-1] = arr_equation[arr_equation.length-1].toString()
			}
			arr_equation[arr_equation.length-1] +=  btn_num.innerHTML;
		}
	}
}
function if_ops_pressed(){
	for(var i=0; i<list_of_ops.length;i++){
		let btn_op = list_of_ops[i];
		btn_op.onclick = () => {
				let res_str = res.innerHTML;
				if(res_str.length===0||"+-x/()".includes(res_str[res_str.length-1])){
					arr_equation = arr_equation.slice(0,-1);

				}
				show_res(btn_op.innerHTML);
				arr_equation.push(btn_op.innerHTML);
				arr_equation.push(0);
				console.log(arr_equation);
		}
	}
}
function clear_res(str){
	if(str=='EC'){
		let res_str = res.innerHTML;
		if("+-x/()".includes(res_str[res_str.length-1])){
			arr_equation = arr_equation.slice(0,-2);
			if(arr_equation.length==0||"+-x/()".includes(arr_equation[arr_equation.length-1])){
				// check last element of arr eqution is a str or not
				console.log("that res:  "+ res_str[res_str.length-1]);
				arr_equation.push(0);
			}
		}
		else{
			if(arr_equation[arr_equation.length-1].length)
					{
					arr_equation[arr_equation.length-1] = arr_equation[arr_equation.length-1].slice(0,-1);
					}
			
		}
		res.innerHTML = res.innerHTML.slice(0,-1);
		if(res.innerHTML.length==0){
			res.innerHTML='';
			arr_equation = [0];
		}

	}
	else{
		res.innerHTML = '';
		arr_equation = [0];
		result_res.innerHTML = '';
	}
	console.log(arr_equation);
}
function if_clr_pressed(){
	for (var i=0; i<clr.length;i++){
		let btn_clr = clr[i];
		btn_clr.onclick = () => {
			clear_res(btn_clr.innerHTML);
		}
	}

}

function if_equal_pressed(){
	btn_equal.onclick = () => {
		// convert array of equation into tree
		let result;
		result = calculator();
		console.log("cun con : "+result);
		console.log(result_res);
		if(result==="type error"){
			result_res.innerHTML = "ERROR!";
		}else{
			result_res.innerHTML = result[0];
		}
		
		arr_equation =[0];
		
	}
}

function calculator(){
		// arr_equation.splice(arr_equation.length-1,1);
		console.log(arr_equation)
		if(arr_equation[arr_equation.length-1]===0){
			arr_equation.splice(arr_equation.length-1,1);
		}
		let operand  = convert_to_postfix(arr_equation);
		console.log(operand);
		let result = reverse_polish(operand);
		return result;

}


if_nums_pressed();
if_ops_pressed();
if_clr_pressed();
if_equal_pressed();


