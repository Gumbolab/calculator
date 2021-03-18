let listOfNums = document.getElementsByClassName('nums');
let listOfOps = document.getElementsByClassName('ops');
let res = document.getElementById('res')
let equal = document.getElementById('eql');
let dot = document.getElementById('dot');
let arrEquation = [0];
let operand = 0;
let flag = 0;
let flagClr=0;
let nums=0;
let precise=0;

function showInRes(str) {
    console.log(str);
    res.innerHTML += str;
}

function clearRes(str) {

    if (str == 'EC') {
				const resStr = res.innerHTML;
		
				if("+-x/()".includes(resStr[resStr.length-1]) )// check res is ops yet, if yes delete ops in arrequation 
						{
							arrEquation = arrEquation.slice(0, -2);// maybe after that arr will be empty
							if(arrEquation.length==0||arrEquation[arrEquation.length-1].length)// check last element in arrequation is str or not, if arr is empty then still push 
								{
									arrEquation.push(0);
								}

						} 

				else 
						{
							if(arrEquation[arrEquation.length - 1]%1==0){
							arrEquation[arrEquation.length - 1] = Math.floor(arrEquation[arrEquation.length - 1] / 10);
							}
							else{
								let strNumFloat = arrEquation[arrEquation.length-1].toString().split('.');
								let countFraction = strNumFloat.length;
								
								console.log(arrEquation);
							}
						}
		
		
				res.innerHTML = res.innerHTML.slice(0, -1);
				if (res.innerHTML.length==0)
						{
							res.innerHTML='';
							arrEquation=[0];}
						
						

	} 
	else {
        res.innerHTML = '';
        arrEquation = [0];
	}
	console.log(arrEquation);
}

function ifNumsPressed() {
    for (var i = 0; i < listOfNums.length; i++) {
        let btnNum = listOfNums[i];
        btnNum.onclick = () => {
			showInRes(btnNum.innerHTML);
			if(flag==0){
			arrEquation[arrEquation.length - 1] = arrEquation[arrEquation.length - 1] * 10 + parseFloat(btnNum.innerHTML);}
			else{
				nums+=1;
				precise=precise*10+parseInt(btnNum.innerHTML);
			}
			


        }
    }

}
function ifDotPressed(){
	dot.onclick=()=>{
		showInRes(dot.innerHTML);
		flag=1;

	}

}
function ifopsPressed() {
    for (var i = 0; i < listOfOps.length; i++) {
        let btnOp = listOfOps[i];
        btnOp.onclick = () => {
			console.log("nums: "+nums);
						arrEquation[arrEquation.length-1]=arrEquation[arrEquation.length-1]+precise/Math.pow(10,nums);
						nums=0;
						flag=0;
						precise=0;
						const resStr = res.innerHTML;
						if("+-x/()".includes(resStr[resStr.length-1])||resStr.length==0)
						{
							arrEquation = arrEquation.slice(0,-1);
						}
						showInRes(btnOp.innerHTML);
						arrEquation.push(btnOp.innerHTML);

						arrEquation.push(0);
						console.log(arrEquation);

        }
    }

}

function ifEqlPressed() {

}

function ifCLRPressed() {
    let clr = document.getElementsByClassName('clr')
    for (var i = 0; i < clr.length; i++) {
        let C = clr[i]
        C.onclick = () => {
            clearRes(C.innerHTML);

        }
    }


}


ifNumsPressed();
ifopsPressed();
ifCLRPressed();
ifDotPressed();