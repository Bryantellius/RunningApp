import * as express from "express";

const router = express.Router();

router.get("/auth", (req, res, next) => {
  try {
    res.json("Auth");
  } catch (err) {
    next(err);
  }
});

export default router;
