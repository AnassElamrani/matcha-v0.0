const db = require('../util/database');

module.exports = class User {
    constructor(id, email, userName, firstName, lastName, password, vkey, gender, bio) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.vkey = vkey;
        this.gender = gender;
        this.bio = bio;
    }
    
    save() {
        return db.execute('INSERT INTO users(email, userName, firstName, lastName, password, vkey, gender, bio) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
        , [this.email, this.userName, this.firstName, this.lastName, this.password, this.vkey, this.gender, this.bio]);
    };
    
    static fetchAll(cb) {
        return db.execute('SELECT * FROM users');
    };
    
    static loginModel(user, pass) {
        return db.execute('SELECT * FROM users WHERE users.userName = ? AND users.password = ?', [user, pass]);
    };

    static UserIdModel(id) {
        return db.execute('SELECT * FROM users WHERE id = ? limit 1', [id]);
    };

    static UserNameModel(user) {
        return db.execute('SELECT * FROM users WHERE users.userName = ? limit 1', [user]);
    };

    static UserEmailModel(email) {
        return db.execute('SELECT * FROM users WHERE users.email = ? limit 1', [email]);
    };
    
    static UserForgetPassword(password, vkey) {
        // need to pass vkey to compare with in db. after updating table vkey
        return db.execute('UPDATE users SET password = ? WHERE vkey = ?', [password, vkey.toString()]);
    };

    static UserForgetPassword_(password, id) {
        // need to pass vkey to compare with in db. after updating table vkey
        return db.execute('UPDATE users SET password = ? WHERE id = ?', [password, id]);
    };

    static vkeyGetUser(vkey){
        return db.execute('SELECT * FROM users WHERE vkey = ?', [vkey]);
    }

    static vkeyValidate(vkey){
        return db.execute('SELECT vkey FROM users WHERE vkey = ?', [vkey]);
    }



    static validateUser(vkey){
        return db.execute('UPDATE users SET verify = 1 WHERE vkey = ?', [vkey]);
    }

    static UpdateOldVkey(vkey, email){
        return db.execute('UPDATE users SET vkey = ? WHERE email = ?', [vkey, email]);
    }

    // filling profil

    static fillProfilUpdate(gender, bio, id){
        return db.execute('UPDATE users SET  gender = ?,bio = ? WHERE id = ?', [gender, bio, id])
    }


    // static fillProfilById(id){
        // return db.execute('UPDATE users SET verify = 1 WHERE vkey = ?', [id]);
    // }

    static delete(id){
        return db.execute('DELETE FROM products WHERE products.id = ?', [id]);
    }
}