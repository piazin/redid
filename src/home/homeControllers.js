const moment = require('moment');
const Category = require('../category/Category');
const Document = require('../document/Document');

module.exports = {
    render_home(req, res){
        Document.findAll({
            include: [
                {model: Category}
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((documents)=>{

            Category.findAll().then((categories)=>{
                res.render('pages/home/index.ejs', {documents: documents, categories: categories});
            }).catch((err)=>{
                console.error('err', err);
                res.status(400);
            })

        }).catch((err)=>{
            console.error('err', err);
            res.redirect('/admin/document');
        });
    }   
}

/*
render_category(req, res){
        var id = req.params.id;

        Document.findAll({
            where: {categoryId: id},
            include: [
                {model: Category}
            ]
        }).then((documents)=>{
            Category.findAll().then((categories)=>{
                res.render('pages/home/index.ejs', {documents: documents, categories: categories});
            }).catch((err)=>{
                console.error('err', err);
                res.status(400);
            })
        }).catch((err)=>{
            console.error('err', err);
        })
    }

*/