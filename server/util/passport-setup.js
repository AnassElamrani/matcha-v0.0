const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: 'users/auth/google/redirect',
        clientID: '960000611041-051bkhaggfe8qal7e32i5cd5uk58qes6.apps.googleusercontent.com',
        clientSecret: 'xsse-isKhX1FAoFLdW6a451E'
    }, () => {
        // passport callback function
    })
)