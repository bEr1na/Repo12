function myNes(){
    var myStorage = {
        "car": {
            "inside":{
                "glove box": "maps",
                "passenger seat":"crumbs"
            },
            "outside":{
                "trunk": "jack"
            }
        }
    };

var gloveBoxCotents = myStorage.car.inside["glove box"];
return gloveBoxCotents;

}

console.log(myNes());
module.exports = myNes;