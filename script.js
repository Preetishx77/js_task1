
var charge;
var sum1=0;

var j = prompt("Enter yesterday's total number of customers");

for (var i = 0; i < j; i++) {

    var hours=prompt("Enter hours for yesterday's customer"+(i+1));
    alert(" Cost\n"+ calculatecharges( hours ) );
    sum1 += calculatecharges(hours);
    
    
    
    }

function calculatecharges( hours )
{
    var h = hours;
    charge = 2.0;
    if( hours > 0 ) {
    if( hours <= 3 )
        return charge;

    else if( hours <= 24 ) {
        while( h > 3 ) {
            charge += .5;
            h--;
            if( charge >= 10 )
            charge = 10; 
            }
            return charge;
        }
    }

}

var k = prompt("Enter hours for new customer"); 
var new1 = k;
alert("The cost for new customer is "+calculatecharges(new1));
alert("Total for yesterday is $ " + sum1);


