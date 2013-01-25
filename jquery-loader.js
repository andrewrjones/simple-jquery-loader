(function() {
  // Get any jquery=___ param from the query string.
  var jqversion = location.search.match(/[?&]jquery=(.*?)(?=&|$)/);
  var defaultversion = '1.9.0';
  var path;
  if (jqversion) {
    path = 'http://code.jquery.com/jquery-' + jqversion[1] + '.js';
  } else {
    path = 'http://code.jquery.com/jquery-' + defaultversion + '.js';
  }
  document.write('<script src="' + path + '"></script>');
}());
