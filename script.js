var css =document.queryselector("Strong");
var color1 =document.queryselector(".color1");
var color2 =document.queryselector(".color2");
var body = document.getElementById("graident");
 


function c() {
    body.style.background=
    "linear-graident (to right,"
    + color1.value
    +","
    + color2.value
    +")";

    css.textcontent = body.style.background + ";";

}

color1.addEventListner("input" ,c);

color2.addEventListner("input", c);

  