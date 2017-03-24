var ourRequest = new XMLHttpRequest();
 // download data from the web
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
ourRequest.onload = function() {
  var ourData = ourRequest.responseText;
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData)
  /*console.log(ourData[0]);*//*produces only one "[" because it doesn't interpret it as json -it sees it as text.*/
};
ourRequest.send();
