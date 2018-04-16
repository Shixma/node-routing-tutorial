module.exports = function(req, res, next) {
    console.log('[MIDDLEWARE] namecheck.js running...')

    //do user hack
    //grab user from db
    // var user = User.findOne({ username: req.params.username });

    // //if now user found
    // if ( ! user) {
    //     res.status(404);
    //     return res.send('404 not found');
    // }

    // //attaching information to the request
 req.user = {
    username: 'chris'
}

    next();
}