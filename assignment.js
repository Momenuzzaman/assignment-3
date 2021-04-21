// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
     return meter;
 }
 var result = kilometerToMeter(15);
 console.log(result);

//  budgetCalculator
function budgetCalculator(watch,phone,laptop){
    var watchPrice = watch*50;
    var phonePrice = phone*100;
    var laptopPrice = laptop*500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(2,4,7);
console.log(result);

// hotelCost
var day = 35;
var totalCost = 0;
if(day<=10){
     totalCost = day *150;
}
else if (day <=20){
    var first10day = 10*150;
    var remaining = day - 10;
    var second10day = remaining*100;
    totalCost = first10day + second10day;

}
 else{
     first10day = 10*150;
     second10day = 10*100;
     remaining = day - 20;
     var moreDay = remaining *50;
     totalCost = first10day +second10day + moreDay;
 }
 console.log(totalCost);

//  megaFriend
var friends = ["shakib","rakib","bappy","muktadir"];
 var max = friends[0];

for(var i = 0; i < friends.length; i++){
    var element = friends[i];
    if(element.length > max.length){
        max = element;
    }
}
console.log(max);