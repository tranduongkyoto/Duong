function convert(){
    var input = document.getElementById("input").value;
    if(input <=4 ) document.getElementById("result").innerHTML = "Điểm của bạn: F";
    if(4.5 <= input && input <=4.9) document.getElementById("result").innerHTML = "Điểm của bạn: D";
    if(5.0 <= input && input <=5.4) document.getElementById("result").innerHTML = "Điểm của bạn: D+";
    if(5.5 <= input && input <=6.4) document.getElementById("result").innerHTML = "Điểm của bạn: C";
    if(6.5 <= input && input <=6.9) document.getElementById("result").innerHTML = "Điểm của bạn: C+";
    if(7.0 <= input && input <=7.9) document.getElementById("result").innerHTML = "Điểm của bạn: B";
    if(8.0 <= input && input <=8.4) document.getElementById("result").innerHTML = "Điểm của bạn: B+";
    if(8.5 <= input && input <=10) document.getElementById("result").innerHTML = "Điểm của bạn: A";
}   


function convert2(){
   var input = document.getElementById("input2").value;
   if(input ==1) document.getElementById("kipthi").innerHTML ="Kip thi 7h";
   if(input ==2) document.getElementById("kipthi").innerHTML ="Kip thi 9h30";
   if(input ==3) document.getElementById("kipthi").innerHTML ="Kip thi 12h30";
   if(input ==4) document.getElementById("kipthi").innerHTML ="Kip thi 15h";

}
