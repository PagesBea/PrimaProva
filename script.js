
 window.onload = function(){
    x=evaluateMargins();
    var tl = new TimelineLite();
        tl.to($("#titolo"), 2, {marginLeft: "50%", marginRight: "20px", ease: Bounce.easeOut});
        tl.to($("#titolo"), 2, {marginLeft: x+"px", marginRight: x+"px"});
        tl.to($("#titolo"), 2, {marginLeft: "auto", marginRight: "auto"});
    }

 evaluateMargins = function(){
    total = $('div#page0').width();// $(window).width();
    titleW = $('#titolo').width();
    return (total-titleW)/2;
 }

ruota = function(selected, element, element2){
        TweenLite.to(element, 1, {rotation:"1.25rad",ease:Bounce.easeOut, opacity:0.5});

        TweenLite.to(element2, 1, {rotation:"1.25rad", ease:Bounce.easeOut, opacity:0.5});

        TweenLite.to(selected, 1.5, { ease: Power1.easeOut, rotation:360, opacity: 1});

}

moveButton = function(element){
    var tl = new TimelineLite();
        tl.to(element, 0.5, {rotation:"-0.2rad"});
        tl.to(element, 0.5, {rotation:"0.4rad"});
        tl.to(element, 0.5, {rotation:"-0.2rad"});
        tl.to(element,0.5, {rotation: "0rad"})
 } 

videoButton = function(url, number, color){
    document.getElementById("buttonBox").innerHTML = '<button id="central_button" type="button" onclick= "play('+number+')"> Video'+number+'</button>';
    $("#central_button").css({backgroundColor: color, visibility: "block"});
    moveButton($("#central_button"));       
}

videoButtonLater = function(url, number,color){
    setTimeout(function(){videoButton(url, number, color)}, 50);
}

play = function(number){
    $(":mobile-pagecontainer").pagecontainer( "change", "#page"+number);
 }

