var path = require('path');
p = path.join(__dirname,path.sep,"public");
console.log(p);
p = "C://abc////adjasjd"
p1  = path.normalize(p)
console.log("Normalised "+p1);
// For more https://nodejs.org/dist/latest-v10.x/docs/api/path.html