$(document).ready(function(){
  
  
  //scroll si toco la flecha
  $(".fa-arrow-circle-down").click(function(){
    var hPC = $(window).height();
    var hMobile = $("h1").outerHeight(true);
    if ($(window).width()<=480){
      $("html, body").animate({ scrollTop: hMobile}, 2000);
    }else{
      $("html, body").animate({ scrollTop: hPC*0.9}, 2000);
    }
    
  });
  
  //resalto home si no bajo
  $("#hbtn").addClass("btn2");
    
  //header solido y resalto la seccion  about y quito home cuando bajo 
  $(window).scroll(function(){
    var h = ($(window).height() * 0.9)-1;     
    if ($(document).scrollTop() > h) {
      $("#header").addClass("solidHeader");
      $("#abtn").addClass("btn2");
      $("#hbtn").removeClass("btn2");
    } else {
      $("#header").removeClass("solidHeader");
      $("#abtn").removeClass("btn2");
      $("#hbtn").addClass("btn2");
    }
  });
  
  //resalto seccion port y quito a about cuando bajo 
  $(window).scroll(function(){
    var h = ($(window).height()) * 1.6;     
    if ($(document).scrollTop() > h) {
      $("#abtn").removeClass("btn2");
      $("#pbtn").addClass("btn2");
    } else {
      $("#pbtn").removeClass("btn2");
    }
  });
  
  //resalto seccion contact y quito a port cuando bajo
  $(window).scroll(function(){
    var h = ($(window).height()) * 2.5;     
    if ($(document).scrollTop() > h) {
      $("#pbtn").removeClass("btn2");
      $("#cbtn").addClass("btn2");
    } else {
      $("#cbtn").removeClass("btn2");
    }
  });
  
  //abrillanta mi nombre
  $("#rodri").mouseover(function(){
    $("#rodri").addClass("rodri");
  });
  $("#rodri").mouseleave(function(){
    $("#rodri").removeClass("rodri");
  });
  
  //cambia color de los botones
  $("#hbtn").mouseover(function(){
    $("#hbtn").addClass("btn1");
  });
  $("#hbtn").mouseleave(function(){
    $("#hbtn").removeClass("btn1");
  });
  $("#abtn").mouseover(function(){
    $("#abtn").addClass("btn1");
  });
  $("#abtn").mouseleave(function(){
    $("#abtn").removeClass("btn1");
  });
  $("#pbtn").mouseover(function(){
    $("#pbtn").addClass("btn1");
  });
  $("#pbtn").mouseleave(function(){
    $("#pbtn").removeClass("btn1");
  });
  $("#cbtn").mouseover(function(){
    $("#cbtn").addClass("btn1");
  });
  $("#cbtn").mouseleave(function(){
    $("#cbtn").removeClass("btn1");
  });
  
  // agrando los i de contacto
  $(".fa-envelope").mouseover(function(){
    $(".fa-envelope").addClass("fa-5x shadeC");
  });
  $(".fa-envelope").mouseleave(function(){
    $(".fa-envelope").removeClass("fa-5x shadeC");
  });
  $(".fa-github").mouseover(function(){
    $(".fa-github").addClass("fa-5x shadeC");
  });
  $(".fa-github").mouseleave(function(){
    $(".fa-github").removeClass("fa-5x shadeC");
  });
   $(".fa-free-code-camp").mouseover(function(){
    $(".fa-free-code-camp").addClass("fa-5x shadeC");
  });
  $(".fa-free-code-camp").mouseleave(function(){
    $(".fa-free-code-camp").removeClass("fa-5x shadeC");
  });
  
  //detecto orientación inadecuada
  if(($(window).height() > $(window).width())&&($(window).width()>481)){
    alert("Please rotate your device!");
  }
  if(($(window).width() > $(window).height())&&($(window).height()<481)){
    alert("Please rotate your device!");
  }
  

});