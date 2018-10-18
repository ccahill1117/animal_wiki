$(document).ready(function() {

  $("button#tigerBtn").click(function() {
    $("div#tigerImg").show();

  });

  $("button#lionBtn").click(function() {
    $("div#lionImg").show();

  });

  $("button#cheetahBtn").click(function() {
    $("div#cheetahImg").show();

  });

  $("div#tigerImg").click(function() {
    $(this).hide();
  });

  $("div#lionImg").click(function() {
    $(this).hide();
  });

  $("div#cheetahImg").click(function() {
    $(this).hide();
  });

  $("button#cheetahBtn").click(function() {
    $("ul#addImg").prepend("<li>mg src=img/tiger.jpg></li>");

  });


});
