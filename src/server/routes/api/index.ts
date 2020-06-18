import * as express from "express";

const router = express.Router();

router.get("/api", (req, res, next) => {
  try {
    res.json("Call Someone");
  } catch (err) {
    next(err);
  }
});

export default router;