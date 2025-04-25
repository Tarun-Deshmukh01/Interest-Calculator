//Defining a function for finding interest amount

function calcAmount(){
    let p,t,r,im,ta;  // local variable

    // Data Collecting
    p =+pamt.value;
    t =+ time.value;
    r =+ roi.value;

    //calculation
    ia = p*r*t/100;
    ta = p+ ia

    //Display the result
    intAmt.innerHTML="Interest Amount &nbsp; &#8377;"+ia;
    totAmt.innerHTML="Total Amount &nbsp; &#8377;"+ta;
}