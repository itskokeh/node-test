import http from 'http'
import * as file from 'fs'
import url from 'url'

http.createServer((req, res) => {
  let q = url.parse(req.url, true)
  let filename = '.' + q.pathname
  file.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(200, {'content-type': 'text/html'})
      return res.end('404 Not Found')
    }
    res.writeHead(200, {'content-type': 'text/html'})
    res.write(data)
    return res.end()
  })
})
.listen(8080)
