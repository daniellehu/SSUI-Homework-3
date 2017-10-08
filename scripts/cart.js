var remove_harness = document.getElementById("remove-1");
var remove_storage = document.getElementById("remove-2");

remove_harness.addEventListener("click", function () {
	var item = document.getElementById("item-1");
	var cost = document.getElementById("costs-1");
	var parentItem = document.getElementById("item-list");
	var parentCost = document.getElementsByClassName("costs")[0];
	
	// remove from lists
	parentItem.removeChild(item);
	parentCost.removeChild(cost);
	
	if (parentCost.children.length == 0) {
		parentItem.innerHTML = "<p>Oh no! Your cart is empty!</p>" + parentItem.innerHTML
		parentCost.innerHTML = "<p>No items in your cart</p>"
	}
	
	// update total
	var total = document.getElementById("total");
	var oldTotal = total.innerHTML.substring(1, total.innerHTML.length);
	var itemCost = cost.children[1].innerHTML;
	var newTotal = parseFloat(oldTotal) - parseFloat(itemCost.substring(1, itemCost.length));
	total.innerHTML = "$" + newTotal.toFixed(2)
});

remove_storage.addEventListener("click", function () {
	var item = document.getElementById("item-2");
	var cost = document.getElementById("costs-2");
	var parentItem = document.getElementById("item-list");
	var parentCost = document.getElementsByClassName("costs")[0];
	
	// remove from lists
	parentItem.removeChild(item);
	parentCost.removeChild(cost);
	
	if (parentCost.children.length == 0) {
		parentItem.innerHTML = "<p>Oh no! Your cart is empty!</p>" + parentItem.innerHTML
		parentCost.innerHTML = "<p>No items in your cart</p>"
	}
	
	// update total
	var total = document.getElementById("total");
	var oldTotal = total.innerHTML.substring(1, total.innerHTML.length);
	var itemCost = cost.children[1].innerHTML;
	var newTotal = parseFloat(oldTotal) - parseFloat(itemCost.substring(1, itemCost.length));
	total.innerHTML = "$" + newTotal.toFixed(2)
});
