$(document).on('pagebeforeshow', '#home', function(event) {
	homepage();
});
function add() {
	// Retrieve the entered form data
	var name = $('[name="name"]').val();
	var clas = $('[name="clas"]').val();
	var sex = $('[name="sex"]').val();
	var race = $('[name="race"]').val();
	//Alerts the user
	//alert(title);
	// Fetch the existing objects
	var objects = getObjects();
	// Push the new item into the existing list
	objects.push({
		name : name,
		clas: clas,
		sex : sex,
		race: race
	});
	// Store the new list
	saveObjects(objects);
	// Reload the page to show the new objects
	//window.location.reload();
}

function delList() {
	//delete
	localStorage.clear();
	//refresh
	window.location.reload();
}

function getObjects() {
	// See if objects is inside localStorage
	if (localStorage.getItem("objects")) {
		// If yes, then load the objects
		objects = JSON.parse(localStorage.getItem("objects"));
	} else {
		// Make a new array of objects
		objects = new Array();
	}
	return objects;
}

function saveObjects(objects) {
	// Save the list into localStorage
	localStorage.setItem("objects", JSON.stringify(objects));
}

function homepage() {
	// Fetch the existing objects
	objects = getObjects();
	// Clear the list
	$('#items').find('li').remove();
	// Add every object to the objects list
	$.each(objects, function(character, item) {
		element = '<li><a href=details.html><h1>' + item.name + '</h1><p>Class: '+ item.clas +'</p><p>Sex: '+ item.sex +'</p><p>Race: '+item.race+ '</p></a></li>';
		$('#items').append(element);
	});

	$('#items').listview();
	$('#items').listview("refresh");
}
