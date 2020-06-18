import * as express from "express";
import * as path from "path";
import apiRouter from "./routes/api";
import * as compression from "compression";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
import config from "./config";
import { Error } from "./utils/types";

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(apiRouter);

app.get("*", (req, res, next) => {
  try {
    res.json(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    next(err);
  }
});

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500);
    res.json({ msg: err.msg });
  }
);

const port = process.env.PORT || config.port;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
