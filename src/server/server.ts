import * as express from "express";
import apiRouter from "./routes/api";
import * as compression from "compression";
import * as helmet from "helmet";
import * as morgan from "morgan";
import * as cors from "cors";
import config from "./config";

const app = express();

app.use(helmet());
app.use(compression());
app.use(cors());

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(apiRouter);

const port = process.env.PORT || config.port;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
