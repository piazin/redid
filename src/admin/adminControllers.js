const Admin = require('../admin/Admin');
const bcrypt = require('bcrypt');
const config = require('../../config/config');

const error = {
    user_not_create: 'usuário não encontrado'
}

module.exports = {

    render_users(req, res){

        Admin.findAll().then((admins)=>{

            res.render('pages/auth/admin.ejs', {admins: admins});

        }).catch((err)=>{

            res.redirect('/');
            console.error('err', err);
        })

    },

    render_create_user(req, res){
        res.render('pages/auth/create-user.ejs');
    },

    to_save_user(req, res){
        var {email, password} = req.body;
      
        if(email != undefined && password != undefined){

            Admin.findOne({
                where: {
                    email: email
                }
            }).then((user)=>{

                if(!user){

                    var salt = bcrypt.genSaltSync(config.salt);
                    var hash = bcrypt.hashSync(password, salt);

                    Admin.create({
                        email: email,
                        password: hash
                    }).then((resp)=>{
                        res.redirect('/admin/user');
                    }).catch((err)=>{
                        console.error('err', err);
                        res.redirect('/admin/users');
                    });
                } else {
                    res.redirect('/');
                }

            });
        } else {
            res.redirect('/');
        }
        
    },

    render_login(req, res){
        res.render('pages/auth/login.ejs');
    },

    auth(req, res){
        var {email, password} = req.body;
        if(email != undefined && password != undefined){

            Admin.findOne({where: {email: email}}).then((user)=>{

                if(user != undefined){

                    let correct = bcrypt.compareSync(password, user.password);
    
                    if(correct){

                        req.session.user = {
                            user: user.id,
                            email: user.email
                        }

                        res.redirect('/admin/users');
                    } else {
                        console.log('login not auth');
                        res.redirect('/login');
                    }


                } else {
                    res.redirect('/login');
                }
            }).catch((err)=>{
                console.error('err', err);
                res.redirect('/login');
            })

        } else {
            res.redirect('/');
        }

    },

    logout(req, res){
        req.session.user = undefined;
        res.redirect('/');
    }
}