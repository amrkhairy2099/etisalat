// Moving header
window.addEventListener("scroll", function(){
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.scrollY > 0);
})

// Random Background 
let backgrd = true;
let backLanding = document.querySelector(".landing");
let imgsArray = ["01.png","02.PNG","03.PNG","04.PNG"];
function changeBack() {
	if (backgrd === true) {
		backgroundInterval = setInterval(() => {
		let randomNumber = Math.floor(Math.random() * imgsArray.length);
		backLanding.style = 'transition: .3s;'
		backLanding.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] +'")';
		}, 3000);
	}
}
changeBack();

// Change Smalle Image 
let smallBack = document.querySelectorAll("ul img");
smallBack.forEach((img) => {
	img.addEventListener("click",(e) => {
		window.localStorage.setItem("back",e.currentTarget.dataset.back);
		backLanding.style.backgroundImage = e.currentTarget.dataset.back;
	});
});

// Closer By Click in evry where in body
let header = document.querySelector(".head");
let dropMenu = document.querySelectorAll(".item > div");
let lis = document.querySelectorAll(".main-ul li");
let mainPay = document.querySelector(".pay");
let payMent = document.querySelector(".sub-pay");
let subPayMent = document.querySelector(".sub-pay .info");
document.addEventListener("click", (e) => {
	if (e.target !== lis && e.target !== dropMenu && e.target !== subPayMent) {
		lis.forEach((li) => {
			li.classList.remove("active");
		})
		payMent.classList.remove("open");
	}
})
header.onclick = function (e) {
	e.stopPropagation();
}

// Open Pay Section
mainPay.onclick = function () {
	mainPay.classList.add("open");
	if (mainPay.dataset.stats === "true") {
		payMent.classList.add("open");
		document.body.style.overflow = "hidden";
	}	
}

// close Pay Section
let closer = document.getElementById("close");
payMent.onclick = function (e) {
	e.target.classList.remove("open");
	document.body.style.overflow = "auto";
}
closer.onclick = function (e) {
	payMent.classList.remove("open");
}

// Change Text when click
let mainText = document.querySelector(".text h1");
let clikLi = document.querySelectorAll(".contorols ul li");
clikLi.forEach((li) => {
	li.addEventListener("click",(e) => {
		clikLi.forEach((li) => {
			li.classList.remove("active");
		})
		li.classList.toggle("active");
		mainText.style  = 'transition: .3s;'
		mainText.innerText = li.dataset.intext;
	})
})

// Open and Close Privaet Security
let overleayPrivet = document.getElementById("overlay-priv");
let privaet = document.getElementById("privaet");
let closePriv = document.getElementById("close-priv");
privaet.onclick = function(e) {
	overleayPrivet.setAttribute("data-hidden",'true');
	document.body.style.overflow = "hidden";
}
closePriv.onclick = function(e) {
	overleayPrivet.setAttribute("data-hidden", "false");
	document.body.style.overflow = "auto";
}

// OPen and Close Terms and Conditions
let overleayConditions = document.getElementById("overlayconditions");
let conditions = document.getElementById("conditions");
let closeConditions = document.getElementById("close-conditions");
conditions.onclick = function(e) {
	overleayConditions.setAttribute("data-hidden", "true");
	document.body.style.overflow = "hidden";
}
closeConditions.onclick = function() {
	overleayConditions.setAttribute("data-hidden", "false");
	document.body.style.overflow = "auto";
}

//Button to move Up page 
let btn = document.getElementById("up");
 window.onscroll = function (){
	if (window.scrollY >= 2000){
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
	btn.onclick = function () {
		window.scrollTo({
			top: 0,
		behavior: "smooth",
		});
	}
 }

// Stop Scrolling
let scrollB = false;
function stopScroll() {
    if (scrollB === true) {
		document.body.style.overflow = "auto";
    } else {
		document.body.style.overflow = "hidden";
	}
}
// stopScroll();