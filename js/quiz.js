let correctAns=0;

function validate(ans1,ans2,ans3,ans4,ans5){
if(ans1 == "BERN"){
	correctAns++;
}
 if(ans2== "BELFAST"){
	 correctAns++;
 }
 
 if(ans3=="SPANISH"){
	 correctAns++;
 }
 
 if(ans4=="CHICAGO"){
	 correctAns++;
 }
 
 if(ans5=="BLUE WHALE"){
	 correctAns++;
 }
 
 imageDisplay(correctAns);

}

function imageDisplay(correctAns){
	
	if(correctAns ==5){
		var first = document.createElement("IMG");
			first.setAttribute("src", "images/first.png");
			first.setAttribute("width", "500");
			first.setAttribute("height", "500");
			first.setAttribute("alt", "First");
			first.setAttribute("class","center");
			document.body.appendChild(first);
			
			document.write("<h3>Congrats you got "+correctAns+ " answers right!!</h3>");
			
	}
	
	else if (correctAns== 3|| correctAns ==4){
		var second = document.createElement("IMG");
			second.setAttribute("src", "images/second.png");
			second.setAttribute("width", "500");
			second.setAttribute("height", "500");
			second.setAttribute("class","center");
			second.setAttribute("alt", "Second");
			document.body.appendChild(second);
			
			document.write("<h3>Congrats you got "+correctAns+ " answers right!!</h3>");
	} 
	
	else if(correctAns==1|| correctAns==2) {
		var third= document.createElement("IMG");
			third.setAttribute("src", "images/third.png");
			third.setAttribute("width", "500");
			third.setAttribute("height", "500");
			third.setAttribute("class","center");
			third.setAttribute("alt", "third");
			document.body.appendChild(third);
			
			document.write("<h3>Congrats you got "+correctAns+ " answers right!!</h3>");
	} 
	
	else {
		document.write( "<h3>Better look next time </h3>" );
	}
	
}
