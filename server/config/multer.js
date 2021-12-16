const multer = require("multer");


// SET STORAGE
var storage = multer.diskStorage({
    destination:"../public/uploads",
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })
   
  var upload = multer({ storage: storage,
  // fileFilter:(req,file,cb)=>{
  // checkFileType(file,cb);
  // }
  })


module.exports = {upload};

  