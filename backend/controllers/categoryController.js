const express = require("express");

Category = require("../models/category.model");


//GET  http://localhost/api/category
exports.list=(req,res)=>{
    Category.find({},(err,categories)=>{
        if(err){
          return  new response(null,err).error500(res);
        }
        return new response(categories,err).success(res);
    })
}
//GET http://localhost/api/category/45567865
exports.getById=(req,res)=>{
    Category.findById(req.params.category_id,(err,category)=>{
        if(err){
            return new response().notFound(res);
        }
        return new response(category,null).success(res);
    })
}
//POST http://localhost/api/category/45567865
exports.create=(req,res)=>{

    var category = new Category();
    category.name = req.body.name;

    category.save((err)=>{
        if(err){
            return new response(null,error).error500(res);
        }
        return new response(category,null).created(res)
    })
}
//PUT http://localhost/api/category/45567865
exports.update=(req,res)=>{
 Category.findById(req.params.category_id,(err,category)=>{
    if(err){
        return new response().notFound(res);
    }
    category.name=req.body.name;
    category.save((err)=>{
        if(err){
            return response(null,err).error500(res);
        }
        return new response(category,null).success(res);
    })
 })
}

exports.delete=(req,res)=>{
    //_id = koyunca hata verdi : yaptım burası tekrar gözden geçirilmeli
    Category.findOneAndDelete({
        _id : req.params.category_id
    },(err,category)=>{
        if(err){
            return new response(null,err).error500(res)
        }
        if(!category){
            return new response().notFound(res)
        }
        //silinen datayı geri almak için 
        return new response(category,null).success(res)
    })
}