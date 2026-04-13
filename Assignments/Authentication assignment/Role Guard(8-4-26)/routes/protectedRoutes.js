const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleGuard = require('../middleware/roleGuard');

router.get("/admin", auth, roleGuard("admin"), (req, res) => {
    res.send({ message: "admin route" });
});

router.get("/user", auth, roleGuard("user"), (req, res) => {
    res.send({ message: "user route" });
}); 
module.exports = router;