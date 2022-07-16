const Category = require('./Category');
const slugify = require('slugify');

module.exports = {
    render_category(req, res){
        res.render('pages/category/home.ejs');
    },
    render_create_category(req, res){
        res.render('pages/category/create_category.ejs');
    },
    save_category(req, res){
        var {title} = req.body;
        var slug = slugify(title);

        if(title != undefined) {
            Category.create({
                title: title,
                slug: slug
            }).then((cat)=>{
                console.log('category', cat);
                res.redirect('/');
            }).catch((err)=>{
                console.log('err', err);
                res.redirect('/');
            });
        }
    }
}