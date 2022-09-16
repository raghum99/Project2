var http=require('http')
var url=require('url')

http.createServer((req:any, res:any)=>{
    if (req.url=='/home'){
        res.write('<h1>Welcome to my First Node Page</h1>')
        res.end()
    }
    if (req.url=='/about'){
        res.write('<h1>About Us Page | Welcome to my First Node Page</h1>')
        res.end()
    }
}).listen (8006, ()=>{
    console.log('Server Started @ 8006')
})