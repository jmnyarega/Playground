var fs = require('fs');

// function that uses data from ajax call request
function outputData(...files) {
    files.forEach(file => {
        console.log(file.toString());
    });
}

// callback made to server for fetching data
fs.readFile('../files/file1.txt', function(error, file1) {
    fs.readFile('../files/file2.txt', function(error, file2) {
        fs.readFile('../files/file3.txt', function(error, file3) {
            setTimeout(() => {
                outputData(file1, file2, file3);
            }, 3000);
        });
    });
});