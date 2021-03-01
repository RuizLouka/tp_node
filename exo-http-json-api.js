const http = require('http')
const url = require('url')

const port = process.argv[2]

const temp = function (temp) {
  return {
    heur: temp.getHours(),
    minute: temp.getMinutes(),
    second: temp.getSeconds()
  }
}

function tousTime (time) {
  return {unixtime: time.getTime()}
}

const parseQuery = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return tousTime(new Date(url.query.iso))
    case '/api/unixtime':
      return tousTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
}

http.createServer(function (request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json'})
    url = url.parse(request.url, true)
    response.end(JSON.stringify(parseQuery(url)))
  } else 

  
}
                 ).listen(+port, function () {
  console.log(port)
}
                         )
