var pdf = require('pdfkit');
var fs = require('fs');



function genPDF(){
  var doc = new pdf(
    {
      info:{
        Title: 'Demo Title',
        Author: 'Demo Author'
      }
    });

  doc.image('./1.jpg',0,0)

  doc.addPage();

  doc.image('./2.jpg',0,0);

  doc.addPage();

  doc.image('./3.jpg',0,0)

  doc.pipe(
    fs.createWriteStream('./out.pdf')
  ).on('finish', function(){
    console.log('PDF Finished');
  })
  doc.end();
}



function main(){
    genPDF();
}


main();
