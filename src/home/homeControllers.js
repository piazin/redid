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
    },
    render_document(req, res){
        var slug = req.params.slug;

        if(slug != undefined){
            Document.findOne({
                where: {slug: slug},
                include: [
                    {model: Category}
                ]
            }).then((document)=>{
                
                if(!document) {
                    return res.redirect('/');
                }

                Category.findAll().then((categories)=>{
                    res.render('pages/home/read-document.ejs', {document: document, categories: categories});
                }).catch((err)=>{
                    console.error('err', err);
                    res.redirect('/');
                });
                
            }).catch((err)=>{
                console.error('err', err);
                res.redirect('/');
            });
        } else {
            res.redirect('/');
        }  
    }, 
    render_category_by_slug(req, res){
        var {slug} = req.params;

        if(slug != undefined){
            Category.findOne({
                order: [
                    ['createdAt', 'DESC']
                ],
                where: {slug: slug},
                include: [{model: Document}]
            }).then((category)=>{
        
                Category.findAll().then((categories)=>{
                    res.render('pages/home/filter-category.ejs', {documents: category.documents, categories: categories, category: category});
                }).catch((err)=>{
                    res.redirect('/');
                    console.error('err', err);
                });

            }).catch((err)=>{
                res.redirect('/');
                console.error('err', err);
            })
        } else {
            res.redirect('/');
        }
    }   
}

/*


*/