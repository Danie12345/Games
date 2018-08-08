function load() {
	if (this.localStorage != null) {
		money = JSON.parse(localStorage.getItem('money'));
		buildings = JSON.parse(localStorage.getItem('buildings'));
	}
}

//The timer to run code every second
var Timer = window.setInterval(function(){Tick()}, 1000);
var buildings = [];

//The object declaration for game saves
function GameSave() {
	this.money = 0;
	this.buildings = [];
	for (var i = 0;i < buildings.length;i++) {
		this.buildings[i] = 0;
	}
}

//The object declaration for buildings
function Building() {
	this.Name = "Bone";
	this.Cost = 10;
	this.PerSec = 1;
}

//The function to initialise all buildings
function InitBuildings() {
	LoadBuilding("Bone",10,1);
	LoadBuilding("Skeleton",100,10);
	LoadBuilding("Human Child",1000,100);
	LoadBuilding("Adult",10000,1000);
	LoadBuilding("Village",100000,10000);
	LoadBuilding("Society",1000000,100000);
	LoadBuilding("Nation",10000000,1000000);
	LoadBuilding("Earthlings",100000000,10000000);
}

//The function to automatically load a building into the buildings array
function LoadBuilding(name,cost,persec) {
	var cur = buildings.length;

	buildings[cur] = new Building();
	buildings[cur].Name = name;
	buildings[cur].Cost = cost;
	buildings[cur].PerSec = persec;
}

//The function used to gather money
function GatherMoney() {
	game.money++; //++ tells javascript to add 1 to the variable

	//Display the player's current money
	document.getElementById("money").innerHTML = game.money;
}

//The function that gets run every second
function Tick() {
	for (var i = 0;i < buildings.length;i++) {
		game.money += game.buildings[i] * buildings[i].PerSec;
	}
	document.getElementById("money").innerHTML = game.money;
}

//The function to buy a lemonade stand
function Build(id) {
	var id = id;
	var fakeid = id - 1;
	if (game.money >= buildings[id].Cost) { //Check if the player has enough money, then subtract it and add a new building if they do
		if (id != 0) {
			if (buildings[fakeid].Qty >= 10) {
				buildings[fakeid].Qty = buildings[fakeid].Qty - 10;
			}
		}
		game.money -= buildings[id].Cost;
		game.buildings[id] = game.buildings[id] + 1;
		document.getElementById("money").innerHTML = game.money;
		document.getElementById("Building1Qty").innerHTML = game.buildings[0];
		document.getElementById("Building2Qty").innerHTML = game.buildings[1];
		document.getElementById("Building3Qty").innerHTML = game.buildings[2];
		document.getElementById("Building4Qty").innerHTML = game.buildings[3];
		document.getElementById("Building5Qty").innerHTML = game.buildings[4];
		document.getElementById("Building6Qty").innerHTML = game.buildings[5];
		document.getElementById("Building7Qty").innerHTML = game.buildings[6];
		document.getElementById("Building8Qty").innerHTML = game.buildings[7];
	}
}

//Run this code once the page has loaded fully
window.onload = function() {
	InitBuildings();
	window.game = new GameSave();
};

function save() {
	localStorage.setItem('money', JSON.stringify(money));
	localStorage.setItem('buildings', JSON.stringify(buildings));
}
