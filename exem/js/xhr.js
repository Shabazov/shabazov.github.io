// {
//         "id": 195893,
//         "pageURL": "https://pixabay.com/en/blossom-bloom-flower-yellow-close-195893/",
//         "type": "photo",
//         "tags": "blossom, bloom, flower",
//         "previewURL": "https://static.pixabay.com/photo/2013/10/15/09/12/flower-195893_150.jpg"
//         "previewWidth": 150,
//         "previewHeight": 84,
//         "webformatURL": "https://pixabay.com/get/35bbf209db8dc9f2fa36746403097ae226b796b9e13e39d2_640.jpg",
//         "webformatWidth": 640,
//         "webformatHeight": 360,
//         "imageWidth": 4000,
//         "imageHeight": 2250,
//         "imageSize": 4731420,
//         "views": 7671,
//         "downloads": 6439,
//         "favorites": 1,
//         "likes": 5,
//         "comments": 2,
//         "user_id": 48777,
//         "user": "Josch13",
//         "userImageURL": "https://static.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg",
//     }

$(document).ready(function(){

  let ok = $.getJSON("https://pixabay.com/api/?key=7592805-2a5f919e40c807d3e4f9f6c74&q=bmw&image_type=photo", function(data){

    // let tmpl = $('#ideas');

    $.each(data.hits, function(i, item){
      // console.log(item);
      $('<div>').attr('class', 'grid-item grid-item--width2').attr('id', 'div'+i).appendTo('#ideas');

        // .attr('style', 'width:'+item.previewWidth+'px;height:'+item.previewHeight+'px;').

      $('<img/>').attr('src', item.webformatURL).attr('class', 'response_img').appendTo('#div'+i);
    });

  });

});
