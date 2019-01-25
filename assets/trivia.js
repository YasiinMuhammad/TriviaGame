$(document).on("click", "#startClock", function() {
    var timer = 50;
    setInterval(function() {
        timer--;
    if (timer >= 0) {
        span = document.getElementById("count");
        span.innerHTML = timer;
    }
    if (timer === 0) {
        alert('time is up!');
        clearInterval(timer);
        check()
    }
    }, 1000);

    $("#submit").on("click", function () {
        check ();
        alert("You got"+count+"correct");
        
    })

    function check(){
    var Q1=document.myform.Q1.value;
    var Q2=document.myform.Q2.value;
    var Q3=document.myform.Q3.value;
    var Q4=document.myform.Q4.value;
    var Q5=document.myform.Q5.value;
    var Q6=document.myform.Q6.value;
    var Q7=document.myform.Q7.value;
    var Q8=document.myform.Q8.value;
    var Q9=document.myform.Q9.value;
    var Q10=document.myform.Q10.value;
    var Q11=document.myform.Q11.value;
    var Q12=document.myform.Q12.value;
    var Q13=document.myform.Q13.value;
    var Q14=document.myform.Q14.value;
    var Q15=document.myform.Q15.value;
    var Q16=document.myform.Q16.value;
    var Q17=document.myform.Q17.value;
    var count=0;

    if(Q1=="a"){
        count++;
    }
    if(Q2=="a"){
        count++;
    }if(Q3=="a"){
        count++;
    }if(Q4=="a"){
        count++;
    }if(Q5=="a"){
        count++;
    }if(Q6=="a"){
        count++;
    }if(Q7=="a"){
        count++;
    }if(Q8=="a"){
        count++;
    }if(Q9=="a"){
        count++;
    }if(Q10=="a"){
        count++;
    }if(Q11=="a"){
        count++;
    }if(Q12=="a"){
        count++;
    }if(Q13=="a"){
        count++;
    }if(Q14=="a"){
        count++;
    }if(Q15=="a"){
        count++;
    }if(Q16=="a"){
        count++;
    }if(Q17=="a"){
        count++;
    }
    
    

};

});
