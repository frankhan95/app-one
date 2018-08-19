$(document).ready(function(){

  $('form').on('submit', function(){

      var msg = $('form input');
      var announcement = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/announce',
        data: announcement,
        success: function(data){
          //do something with the data via front-end framework
          console.log("ajax: " + data);
          location.reload();
        }
      });

      return false;

  });

//   $('li').on('click', function(){
//       var item = $(this).text().replace(/ /g, "-");
//       $.ajax({
//         type: 'DELETE',
//         url: '/announce/' + msg,
//         success: function(data){
//           //do something with the data via front-end framework
//           location.reload();
//         }
//       });
//   });

});