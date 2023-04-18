$(document).ready(function() {
    $('#search-button').click(function() {
      var query = $('#search-input').val();
      if (query !== '') {
        $.ajax({
          url: 'https://www.googleapis.com/books/v1/volumes',
          data: { q: query },
          method: 'GET',
          success: function(data) {
            var results = data.items;
            var html = '<ul>';
            for (var i = 0; i < results.length; i++) {
              var book = results[i].volumeInfo;
              var title = book.title;
              var author = book.authors ? book.authors.join(', ') : 'Unknown Author';
              var thumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x192.png?text=No+Image';
              html += '<li>';
              html += '<img src="' + thumbnail + '">';
              html += '<div>';
              html += '<h3>' + title + '</h3>';
              html += '<p>' + author + '</p>';
              html += '</div>';
              html += '</li>';
            }
            html += '</ul>';
            $('#results').html(html);
          },
          error: function(xhr, textStatus, error) {
            console.log(xhr.statusText);
            console.log(textStatus);
            console.log(error);
            $('#results').html('Error: ' + error);
          }
        });
      } else {
        $('#results').html('Please enter a search query');
      }
    });
  });
  