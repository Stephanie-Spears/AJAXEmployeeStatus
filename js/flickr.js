$(document).ready(function(){
  const flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $('button').click(function () {
    // highlight the button
    $("button").removeClass("selected");
    $(this).addClass("selected");

    // AJAX

    const photoChoice = $(this).text();
    const flickrOptions = {
      tags: photoChoice,
      format: "json"
    };
    function displayPhotos(data) {
      let photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);

  }); // end click

  $('form').submit(function(event){
    event.preventDefault();
    const $searchField = $('#search'); //commonly you can store jquery selections inside a variable for re-use
    const $submitButton = $('#submit');

    $searchField.prop("disabled", true);
    $submitButton.attr("disabled", true).val("searching...");

      const photoSearch = $searchField.val();
      const flickrSearch = {
        tags: photoSearch,
        format: "json"
      };
      function displaySearch(data){
        let searchHTML = '<ul>';
        $.each(data.items, function(i,photo){
          searchHTML += '<li class="grid-25 tablet-grid-50">';
          searchHTML += '<a href="' + photo.link + '" class="image">';
          searchHTML += '<img src="' + photo.media.m+ '"></a></li>';
        });
        searchHTML += '</ul>';
        $('#photoSearch').html(searchHTML);

        $searchField.prop("disabled", false);
        $submitButton.attr("disabled", false).val("Search");
      }
      $.getJSON(flickrAPI, flickrSearch, displaySearch);
    });


});