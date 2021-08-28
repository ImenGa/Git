var pi=3.14 //tupe number
var name="imene" //type string
var isok= false //type boolen
var date= Date.now()

console.log(date)


function sub(x , y) {
    var s=x - y ;
    return s;
   
}
var note=sub(10,4);
console.log(note);

function note(x) {
    var s = Math.pow(x, 2);
    return s;
  }
  var sheesh = note(8);
  console.log(sheesh);

  function ourlenght() {
      var l=str.lenght;
      console.log(l)
      return l;
  }
function boocl() {
    for (var i = 1000;i>10; i=i-2){
       var h1 = document.createElement('h1')
       h1.innerHTML='The element '+ i
       document.getElementById('iddiv')
           .appendChild(h1)
         }
        }




