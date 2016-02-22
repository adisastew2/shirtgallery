// create E-Commerce gallery using constructor notation
// dynamically create your elements using JavaScript
// use bootstrap to style and display items evenly
// possibly add: site around gallery, put into a slider, 
// create a modal that comes up when shirt is clicked, create magnifier

function Shirt(name, size, color, stock, image) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.stock = stock;
	this.image = image;
}

var shirtArray = []

var whitetee = new Shirt('White Tee', 'medium', 'white', 150, 'img/whitetee.png')
var blacktee = new Shirt('Black Tee', 'medium', 'black', 50, 'img/blacktee.png')
var redtee = new Shirt('Red Tee', 'large', 'red', 20, 'img/redtee.png')
var bluetee = new Shirt('Blue Tee', 'small', 'blue', 70, 'img/bluetee.png')
var greentee = new Shirt('Green Tee', 'large', 'green', 55, 'img/greentee.png')
var yellowtee = new Shirt('Yellow Tee', 'medium', 'Yellow', 250, 'img/yellowtee.png')

shirtArray.push(whitetee)
shirtArray.push(blacktee)
shirtArray.push(redtee)
shirtArray.push(bluetee)
shirtArray.push(greentee)
shirtArray.push(yellowtee)

for (i = 0; i < shirtArray.length; i++) {
	var tName = document.createTextNode(shirtArray[i].name)
	var tSize = document.createTextNode("Available size " + shirtArray[i].size)
	var tColor = document.createTextNode("Color: " + shirtArray[i].color)
	var tStock = document.createTextNode("In Stock: " + shirtArray[i].stock)
	var tButton = document.createTextNode("Buy Now!")
	var tImage = shirtArray[i].image

	var newCol = document.createElement("DIV")
	var newDiv = document.createElement("DIV")
	var nameH1 = document.createElement("H1")
	var sizeh4 = document.createElement("H4")
	var colorH4 = document.createElement("H4")
	var stockH4 = document.createElement("H4")
	var buyNow = document.createElement("BUTTON")
	var image = document.createElement("IMG")

	nameH1.appendChild(tName)
	sizeh4.appendChild(tSize)
	colorH4.appendChild(tColor)
	stockH4.appendChild(tStock)
	buyNow.appendChild(tButton)
	buyNow.className = "btn btn-primary btn-lg"
	image.src = tImage
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "tshirt shirtName" + i + " thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(sizeh4)
	newDiv.appendChild(colorH4)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("shirts").appendChild(newCol)
};



























