"use strict";
import app from "./server";
import { serverless } from "./server";
import serverless from "serverless-http";
module.exports.hello = serverless(app);
