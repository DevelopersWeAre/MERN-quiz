const express = require("express");
const router = express();

router.use("/test", require("./test.route"));
router.use("/user", require("./user.route"));

module.exports = router;
