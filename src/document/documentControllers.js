const Document = require('./Document');

module.exports = {
    render_documents(req, res){
        res.render('pages/document/home.ejs');
    }
}