import * as file from 'fs'
import express from 'express'

const PORT = 8080
const app = express()

app.get('/', (req, res) => {
  file.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(200, { 'content-type': 'text/html' })
      return res.write('404 Not Found')
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

app.get('/about.html', (req, res) => {
  file.readFile('./about.html', (err, data) => {
    if (err) {
      res.writeHead(200, { 'content-type': 'text/html' })
      return res.write('404 Not Found')
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

app.get('/contact-me.html', (req, res) => {
  file.readFile('./contact-me.html', (err, data) => {
    if (err) {
      res.writeHead(200, { 'content-type': 'text/html' })
      return res.write('404 Not Found')
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(data)
    return res.end()
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
