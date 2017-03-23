window.onload = function() {
  const dataSrc = './scripts/data.json';

  $.getJSON(dataSrc, function(data) {
    console.log( data );
  })
  console.log( 'async?' );
}
