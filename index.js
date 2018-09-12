var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
/*
var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();
conversion({ html: "<h1>Hello World</h1>" }, function(err, pdf) {
  var output = fs.createWriteStream('/home/site/wwwroot/output.pdf')
  console.log(pdf.logs);
  console.log(pdf.numberOfPages);
    // since pdf.stream is a node.js stream you can use it
    // to save the pdf to a file (like in this example) or to
    // respond an http request.
  pdf.stream.pipe(output);
});
*/
