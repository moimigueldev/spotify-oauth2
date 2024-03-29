const keys = require('../auth-config');
const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.spotify['client-id'],
      clientSecret: keys.spotify['client-secret'],
      callbackURL: '/auth/spotify/callback'
    },
    function(accessToken, refreshToken, expires_in, profile, done) {
      keys.user = profile._json;
      console.log(profile);
      done(null, keys.user);
    }
  )
);
