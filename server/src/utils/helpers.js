module.exports = {
    wrapApi: (res, promise) => {
        promise.then(todo => {
            res.json({ todo })
        }).catch(err => {
            res.status(400)
            res.send(err)
        })
    }
}