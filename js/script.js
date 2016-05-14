// create E-Commerce gallery using constructor notation
// dynamically create your elements using JavaScript
// use bootstrap to style and display items evenly
// possibly add: site around gallery, put into a slider, 
// create a modal that comes up when shirt is clicked, create magnifier

// item constructor
function Shirt(name, size, color, stock, image) {
	this.name = name;
	this.size = size;
	this.color = color;
	this.stock = stock;
	this.image = image;
}

var shirtArray = []

var whitetee = new Shirt('Punching Bag', 'medium', 'white', 20, 'img/pbag.jpg')
var blacktee = new Shirt('Speed Bag', 'medium', 'black', 50, 'img/sbag.jpg')
var redtee = new Shirt('Speed Bag Platform', 'large', 'red', 20, 'img/sbagplat.jpg')
var bluetee = new Shirt('Wing Chun Dummy', 'small', 'blue', 70, 'img/dummy.jpg')
var greentee = new Shirt('Head Gear', 'large', 'green', 55, 'img/hgear.jpg')
var yellowtee = new Shirt('Boxing Gloves', 'medium', 'Yellow', 250, 'img/gloves.jpg')

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
	var nameH1 = document.createElement("H2")
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
