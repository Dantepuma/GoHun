// function greet(txt) {
//   read = function(txt){
//
//   }
//   write = function(txt) {
//
//   }
// }
// module.exports = greet
var jsonfile = require('jsonfile');
module.exports = {
  read: function(txt) {
  console.log('from readFile' + txt);
  },

  write: function(txt) {
    var jsonfile = require('jsonfile')
    var file = './app/data/contacts.json'
    jsonfile.readFile(file, function(err, obj) {
      console.dir(obj)
    })
  }
};



// var jsonfile = require('jsonfile')
// var file = './app/data/contacts.json'
// jsonfile.readFile(file, function(err, obj) {
//   console.dir(obj)
// })

// var fs = require('fs'),
//     JSONStream = require('JSONStream');
//
// var stream = fs.createReadStream('./app/data/contacts.json', {encoding: 'utf8'}),
//     parser = JSONStream.parse();
//
// stream.pipe(parser);
//
// parser.on('root', function (obj) {
//   console.log(obj); // whatever you will do with each JSON object
// });
//
// console.log('fasza');

// var fs = require('fs');
//
//
//
// function getData(srcPath) {
// fs.readFile(srcPath, 'utf8', function (err, data) {
//         if (err) throw err;
//         return data;
//         }
//     );
// }
//
//
// function writeData(savPath, srcPath) {
//         fs.writeFile(savPath, (getData(srcPath)), function(err) {
//         if (err) throw err;
//             //console.log(getData(srcPath));
//             console.log('complete');
//         }
//     );
// }
// //getData ('./test/test.txt');
// writeData ('./app/data/test1.json','./app/data/contacts.json');
