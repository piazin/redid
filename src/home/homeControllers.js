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
                ['id', 'DESC']
            ]
        }).then((documents)=>{
            res.render('pages/home/index.ejs', {documents: documents});
        }).catch((err)=>{
            console.error('err', err);
            res.redirect('/admin/document');
        })

    }
}