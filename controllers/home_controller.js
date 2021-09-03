// Function to render Home Page
const multer = require('multer');


let imageConfig =  multer({
     limits: {
         fileSize: 10000000 // 10000000 Bytes = 10 MB
       }
 }).single('image');

module.exports.home = function(req, res){

        return res.render('to-do', {
            title: "Demo Api", //Passing the title of the page
        })
    }
module.exports.upload = function(req, res){

    imageConfig(req, res, function(err){
        if(err){
            console.log(err);
        }
        if(req.file){                       //If File got uploaded correctly in request
            console.log(req.file);
            let data = {
                image: true,
            }
            return res.send(data)
        }
        else{        
            let data = {
                image: false,
            }
            return res.send(data)
        }
    });
}