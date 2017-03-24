window.onload = function gettinSwapiWithIt () {

  const routeName = ''
  const url = `https://svc.metrotransit.org/NexTrip/Stops/21/3?format=json`

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    let routes = [];
    let values = [];
    let routesLength = data.length;
    for (let i = 0; i < routesLength; i++) {
        routes.push(data[i].Text);
        values.push(data[i].Value);
    }
console.log(routes);
console.log(values);
console.log(routes[0])
    if (routes[0] === 'Union Depot ') {
    console.log('the route called Union Depot is known as ', routes);
    }
    // else console.log("The NY bus routes are known by these names: " + routes + "\n \n and have these identifier numbers: " + values +',');
  })
}
