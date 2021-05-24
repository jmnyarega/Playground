function hello(req, res, next) {
    const loggedIn = true;
    if (!loggedIn) {
        res.json({
            status: "not logged In",
        });
    } else {
        next();
    }
}

function log(req, res, next) {
    const { method, url } = req;
    const date = new Date()
    console.log(`logs: ${method} ${url} ${date}`);
    next();
}

module.exports = {
    hello,
    log,
}
