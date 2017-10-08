var types = document.getElementById("type");
var sizes = document.getElementById("size");
var colors = document.getElementById("color");

var selected_type = null;
var selected_size = null;
var selected_color = null;

for (var i = 0; i < types.children.length; i++ ) {
	var child = types.children[i]
	var this_button = child.addEventListener("click", function() {
		for (var j = 0; j < types.children.length; j++) {
			var each_child = types.children[j];
			if (each_child == this) {
				if (!this.classList.contains("selected")) {
					this.classList.add("selected");	
					selected_type = this.innerText
				} else {
					this.classList.remove("selected");
				}
			} else {
				if (each_child.classList.contains("selected")) {
					each_child.classList.remove("selected");
				}
			}
		}
	});
}

for (var i = 0; i < sizes.children.length; i++ ) {
	var child = sizes.children[i]
	var this_button = child.addEventListener("click", function() {
		for (var j = 0; j < sizes.children.length; j++) {
			var each_child = sizes.children[j];
			if (each_child == this) {
				if (!this.classList.contains("selected")) {
					this.classList.add("selected");	
					selected_size = this.innerText
				} else {
					this.classList.remove("selected");
				}
			} else {
				if (each_child.classList.contains("selected")) {
					each_child.classList.remove("selected");
				}
			}
		}
	});
}

for (var i = 0; i < colors.children.length; i++ ) {
	var child = colors.children[i]
	var this_button = child.addEventListener("click", function() {
		for (var j = 0; j < colors.children.length; j++) {
			var each_child = colors.children[j];
			if (each_child == this) {
				if (!this.classList.contains("outlined")) {
					this.classList.add("outlined");	
					selected_color = this.innerText
				} else {
					this.classList.remove("outlined");
				}
			} else {
				if (each_child.classList.contains("outlined")) {
					each_child.classList.remove("outlined");
				}
			}
		}
	});
}

var addButton = document.getElementById("addToCart");
addButton.addEventListener("click", function() {
	if (selected_color == null || 
		selected_size == null  ||
		selected_type == null) {
		alert("Please select the type, size, and color before adding to your cart!");
	} else {
		// add count to cart
		var cart = document.getElementById("cart-count")
		cart.innerHTML = parseInt(cart.innerHTML) + 1;
		
		var title = document.getElementsByTagName("h3")[0].innerHTML
		
		alert("Successfully added " + title + 
			  " to your shopping cart!\nType: " + selected_type + "\nSize: " +
			  selected_size + "\nColor: " + selected_color);
	}
});