var numSquare=6;
var colors=generateRandomColor(numSquare);
var h1=document.querySelector("h1");
function generateRandomColor(length)
{
	var arr=[];
	for (var i =0; i < length; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	/*pick a random color from r */
	var r=Math.floor(Math.random()*256);
	/*pick a random color from g */
	var g=Math.floor(Math.random()*256);
	/*pick a random color from b */
	var b=Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
var pickedColor=pickColor();
function pickColor() 
{
	var z=Math.floor(Math.random() * colors.length);
	return colors[z];
}
var display1=document.querySelector("#display1");
display1.textContent=pickedColor;


var messageDisplay= document.querySelector("#messageDisplay");
var squares= document.querySelectorAll(".square");
function colorChanger(color2)
{
	for (var i=0; i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color2;
	}
}
for (var i=0;i < squares.length; i++)
{
	/*all the colors being attached to the square*/
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function()
		{
			/*grab the color*/
			var selectedColor=this.style.backgroundColor;
			/*matching the color*/
			if (selectedColor===pickedColor) {
				messageDisplay.textContent="You got it!";
				colorChanger(selectedColor);
				h1.style.backgroundColor=selectedColor;
				reset2.textContent="Select Again?";
			}
			else {
				messageDisplay.textContent="Wrong!";
				this.style.backgroundColor="#232323";
				reset2.textContent="New Colors";
			}
		});
}

var reset2=document.querySelector("#reset");
reset2.addEventListener("click",function() {
	/*newColors*/
	colors=generateRandomColor(numSquare);
	/*newPickFuncton*/
	pickedColor=pickColor();
	/*matchThecolors*/
	display1.textContent=pickedColor;
	for (var i=0;i < squares.length; i++)
	{
	/*newColors*/
	squares[i].style.backgroundColor=colors[i];
	/*blackBackground*/
	h1.style.backgroundColor="steelblue";
	/*Remove Right or Wrong*/
	messageDisplay.textContent="Keep Selecting";
	}


});

var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");

easy.addEventListener("click",function() 
{
	easy.style.backgroundColor="white";
	hard.style.backgroundColor="green";
	numSquare=3;
	colors=generateRandomColor(numSquare);
	pickedColor=pickColor();
	display1.textContent=pickedColor;
	for (var i=0;i < squares.length; i++)
	{
		if (colors[i]) 
		{	
			/*newColors*/
			squares[i].style.backgroundColor=colors[i];
		}
		else 
		{
			/*hiding the last 3 colors*/
			squares[i].style.display="none";
		}
	}
});


hard.addEventListener("click",function() 
{
	easy.style.backgroundColor="green";
	hard.style.backgroundColor="white";
	numSquare=6;
	colors=generateRandomColor(numSquare);
	pickedColor=pickColor();
	display1.textContent=pickedColor;
	for (var i=0;i < squares.length; i++)
	{
	/*newColors*/
	squares[i].style.backgroundColor=colors[i];
	/*enabling all 6 colors*/
	squares[i].style.display="block";
	}
});