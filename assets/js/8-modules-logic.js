var module = (function(){
    var myName = "Vitaliy";
    var mymodule= "Badge";
    var citeME = function() {
        document.getElementById("uname").setAttribute('class','d-none' );
          
        
    }; 

    var mymod = {
        mess : citeME
    };
    return mymod;
}) ();