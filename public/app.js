showWorkouts();



$("#review").on("click", function() {
    $.ajax({
      type: "PUT",
      url: "/review",
      dataType: "json",
      data: {
        id: $("#idReview").val(),
        title: $("#titleReview").val(),
        body: $("#bodyReview").val(),
        type: $("#typeReview").val(),
        weight: $("#weightReview").val(),
        sets: $("#setsReview").val(),
        duration: $("#durationReview").val()
      }
      
    })
      .then(function(data) {
        location.reload();
            });
  });



$("#inputNew").on("click", function() {
    $.ajax({
      type: "POST",
      url: "/submit",
      dataType: "json",
      data: {
        title: $("#title").val(),
        body: $("#body").val(),
        type: $("#type").val(),
        weight: $("#weight").val(),
        sets: $("#sets").val(),
        duration: $("#duration").val()
      }
      
    })
      .then(function(data) {
        location.reload();
        
        
            });
  });

$("#display").on("click", function(event) {
  $.ajax({
    type: "GET",
    url: "/exercises",
    dataType: "json"
    
  })
    .then(function(data) {
      console.log(data);
      console.log(event.target.id);
      for (let i = 0; i < data.length; i++) {
          if (data[i]._id === event.target.id)
          {
            $("#titleReview").val(data[i].title);
            $("#bodyReview").val(data[i].body);
            $("#typeReview").val(data[i].type);
            $("#weightReview").val(data[i].weight);
            $("#setsReview").val(data[i].sets);
            $("#durationReview").val(data[i].duration);
            $("#idReview").val(data[i]._id);
            
          }
          
      }
          });
});


function showWorkouts() {
    $("#display").empty();
    $.getJSON("/exercises", function(data) {
      for (var i = 0; i < data.length; i++) {
        $("#display").prepend("<button class='button' id =" + data[i]._id +">"+ data[i].title + "</button> <br>");
      }
      
    });
  };


