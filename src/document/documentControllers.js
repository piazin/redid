const Document = require('./Document');
const Category = require('../category/Category');
const slugify = require('slugify');

const {parseISO, format, formatRelative} = require ('date-fns');
const pt = require('date-fns/locale/pt');

module.exports = {
    render_documents(req, res){
        
        Document.findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            include: [{model: Category}]
        }).then((documents)=>{
            if(documents != null && documents != undefined){
                res.render('pages/document/home.ejs', {documents: documents});
            } else {
                res.redirect('/');
            }
        }).catch((err)=>{
            console.error('err', err);
            res.redirect('/');
        })
        
    },
    render_document_create(req, res){

        //find categoryID
        Category.findAll().then((categories)=>{
            res.render('pages/document/create_document.ejs', {categories: categories});
        }).catch((err)=>{
            res.redirect('/admin/document');
        });

    },
    to_save_document(req, res){
        var {title, body, url_thumbnail, category_id} = req.body;
        var slug = slugify(title, {
            lower: true
        });

        var date = format(new Date, 'yyyy-MM-dd HH:mm:ss');
        var dateISO = parseISO(date);
        var dateString = dateISO.toISOString();

        if(title != undefined && body != undefined && category_id != undefined){
            Document.create({
                title: title,
                slug: slug,
                body: body,
                urlThumbnail: url_thumbnail,
                dateCreate: dateString,
                categoryId: category_id
            }).then(()=>{
                res.redirect('/admin/document');
            }).catch((err)=>{
                res.redirect('/');
                console.error(err);
            })
        } else {
            res.redirect('/admin/document');
        }
    },
    delete_document(req, res){
        var id = req.params.id;

        if(id != undefined){
            Document.destroy({
                where: {
                    id: id
                }
            }).then(()=>{
                setTimeout(()=>{
                    res.redirect('/admin/document');
                }, 1000);
            }).catch((err)=>{
                console.error('err', err);
            });
        } else {
            res.redirect('/');
        }
    },
    render_document_edit(req, res){
        var id = req.params.id;

        if(id != undefined){
            Document.findByPk(id).then((document)=>{

                Category.findAll().then((categories)=>{
                    res.render('pages/document/edit_document.ejs', {document: document, categories: categories});
                }).catch((err)=>{
                    res.redirect('/admin/document');
                    console.error('err', err);
                })
            }).catch((err)=>{
                res.redirect('/admin/document');
                console.error('err', err);
            });
        } else {
            res.redirect('/admin/document');
        }
    },
    update_document(req, res){
        var id = req.params.id;
        var {title, body, url_thumbnail, category_id} = req.body;
        var slug = slugify(title, {
            lower: true
        });

        if( title != undefined && body != undefined && url_thumbnail != undefined && category_id != undefined){
            Document.update({
                title: title,
                slug: slug,
                body: body,
                urlThumbnail: url_thumbnail,
                categoryId: category_id
            }, {where: {id: id}}).then(()=>{
                res.redirect('/admin/document');
            }).catch((err)=>{
                console.error('err', err);
                res.redirect('/');
            });
        } else {
            res.redirect(`/admin/document/edit/${id}`);
        }
        
    },

    
}
