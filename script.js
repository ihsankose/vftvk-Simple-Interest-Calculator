function compute()
{
    p = document.getElementById("principal");
    pv = p.value;
    if ( pv <= 0 ) {
        alert("Please enter a positive number for amount");
        p.focus();
        return false;
    }
    else{
        r = document.getElementById("rate").value;
        y = document.getElementById("years").value;
        a = pv*r*y/100;
        var d = new Date();
        var n = d.getFullYear();
        var ny = n + parseInt(y,10);

        document.getElementById("result").innerHTML = 
        "If you deposit <mark>" + pv + "</mark>,<br>" +
        "at an interest rate of <mark>" + r + "%</mark>,<br>" +
        "You will receive an amount of <mark>" + a + "</mark><br>"+
        "in the year <mark>" + ny +"</mark>";

        p.focus();
        return true;

    }
    
    
}

function showYear()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("sliderYear");
    output.innerHTML = slider.value; // Display the default slider value
}


