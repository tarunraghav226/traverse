//selectors
const fair = document.getElementById("fair");
const distance = document.getElementById("distance");
const price = document.getElementById("price");
const discount = document.getElementById("discount");
const discPrice = document.getElementById("disc-price");

//user input selectors
const distByUser = document.getElementById("user-distance");
const promoCode = document.getElementById("promo-code");

//button selector
const btn = document.getElementById("cal-btn");

btn.onclick = function(e){
    e.preventDefault();
    
    var distTravel = distByUser.value;
    var calPrice = Number(fair.innerText);
    var calDisc = Number(discount.innerText);

    distance.innerHTML = distTravel;
    price.innerHTML = (distTravel * calPrice);

    discPrice.innerHTML = (distTravel * calPrice) - ((distTravel * calPrice) * calDisc)/100;

    document.getElementsByClassName("calculated-price")[0].style.display = "block";
}