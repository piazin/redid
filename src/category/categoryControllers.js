const Category = require('./Category');
const slugify = require('slugify');
const Document = require('../document/Document');

module.exports = {
    render_category(req, res){
        
        Category.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        }).then((categories)=>{
            res.render('pages/category/home.ejs', {categories: categories});
        }).catch((err)=>{
            console.log('err', err);
            res.status(404);
        });
    },
    render_create_category(req, res){
        res.render('pages/category/create_category.ejs');
    },
    to_save_category(req, res){
        var {title} = req.body;
        var slug = slugify(title, {
            lower: true
        });

        if(title != undefined) {
            Category.create({
                title: title,
                slug: slug
            }).then(()=>{
                setTimeout(()=>{
                    res.redirect('/admin/category');
                }, 3000);
            }).catch((err)=>{
                console.log('err', err);
                res.redirect('/admin/category');     
            });
        }
    },
    delete_category(req, res){
        var id = req.params.id;

        if(id != undefined){
            Document.destroy({
                where: {
                    categoryId: id
                }
            }).then(()=>{
                
                Category.destroy({
                    where: {
                        id: id
                    }
                }).then(()=>{
                    setTimeout(()=>{
                        res.redirect('/admin/category');
                    }, 1000);
                }).catch((err)=>{
                    console.error('err', err);
                    res.redirect('/');
                });
            
            }).catch((err)=>{
                console.error('err', err);
                res.redirect('/');
            });
        }     
        
    },
    render_category_edit(req, res){
        var id = req.params.id;

        Category.findByPk(id).then((category)=>{
            res.render('pages/category/edit_category.ejs', {category: category});
        }).catch((err)=>{
            console.error('err', err);
            res.redirect('/admin/category');
        })
    },
    update_category(req, res){
        var id = req.params.id;
        var title = req.body.title;
        var slug = slugify(title, {
            lower: true
        });

        if(title != undefined){
            Category.update({
                title: title,
                slug: slug
            }, {
                where: {id}
            }).then(()=>{
                res.redirect('/admin/category');
            }).catch((err)=>{
                res.redirect('/');
                console.error('err', err);
            });
        }
    }
}