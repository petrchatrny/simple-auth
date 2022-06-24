const {Router} = require("express");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const {SECRET, MAX_AGE} = require("../consts")
const Dragon = require("../model/dragon");
const {requireLogin} = require("../middleware/authentication");

const router = Router();

const createJwt = (payload) => {
    return jwt.sign({payload}, SECRET, {expiresIn: MAX_AGE});
}

/**
 * @route POST api/users/register
 * @desc Register new user
 * @access Private
 */
router.post("/users/register", (req, res) => {
    const {email, password} = req.body;
    User.create({email, password})
        .then(user => {
            const token = createJwt(user._id);
            res.cookie("auth", token, {httpOnly: true, maxAge: MAX_AGE * 10});
            return res.status(200).json({message: "success", data: user})
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({message: "failed", error})
        });
});

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/users/login", (req, res) => {
    User.find(req.body)
        .then(user => {
            const maxAge = 3 * 24 * 60 * 60
            const token = createJwt(user._id, maxAge);
            res.cookie("auth", token, {httpOnly: true, maxAge: maxAge * 10});
            return res.status(200).json({message: "success", data: user})
        })
        .catch(err => {
            return res.status(400).json({message: "failed", err})
        });
});


/**
 * @route POST api/users/logout
 * @desc Log user out
 * @access Public
 */
router.post("/users/logout", (req, res) => {
    res.clearCookie("auth");
    return res.status(200).json({message: "success"})
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/users", requireLogin, (req, res) => {
    const token = req.cookies.auth;
    const _id = jwt.verify(token, SECRET).payload;
    User.findOne({_id}, {email: 1, registrationDate: 1})
        .then(user => {
            return res.status(200).json({message: "success", data: user})
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({message: "error", code: "unauthenticated-access"});
        })
});

/**
 * @route GET api/dragons
 * @desc Get dragons
 * @access Private
 */
router.get("/dragons", requireLogin, (req, res) => {
    Dragon.find()
        .then(dragons => {
            return res.status(200).json({message: "success", data: dragons})
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({message: "error", error})
        })
});

module.exports = router;