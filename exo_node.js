const http = require('http')
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method == 'POST') {
   req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase()
  }) ).pipe(res);
  	}
    )
    ).pipe(res)
    
  } else {
  	return res.end('It\'s not a POST method.')
  }

 
})

server.listen(parseInt(process.argv[2]))
