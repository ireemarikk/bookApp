var mongoose = require("mongoose");
var category = require("./category.model");


var bookShmema = mongoose.schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
        type:Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
    created: {
        type: Date,
        default:() => {return new Date()}
    },
    // objectId primary key olarak düşünülebiliyor
    categoryBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
})

module.exports=mongoose.model("book",bookShema)