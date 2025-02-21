import { Request, Response, NextFunction } from "express";
import path from "path";

export const logging = (req: Request, res: Response, next: NextFunction) => {
  const fs = require("fs");
  const filePath = path.join(__dirname, "../data/serverLogs.txt");
  const logData = `${req.method} request made to: ${req.url} log- [${new Date()}]\n`;
  fs.appendFile(`${filePath}`, logData, (err: any) => {});
  console.log(logData);
  next();
};
