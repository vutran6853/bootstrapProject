function count() {
  var content = $("#text-input").val();
  $("#word-count").text(content.length);
  
  if (content.length > 40) {
    $("#word-count").addClass("alert");
  } else {
    $("#word-count").removeClass("alert");
  }
}
$("#text-input").on( "input", count );