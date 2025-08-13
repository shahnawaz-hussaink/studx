const userValidator = (req, res) => {
    res.json(req.user); // req.user is already set by middleware
};

module.exports = userValidator ;
