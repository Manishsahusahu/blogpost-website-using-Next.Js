// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";

export default async function handler(req, res) {
  let files = await fs.promises.readdir("blogdata", "utf-8");
  let myFiles = [];
  await Promise.all(
    files.map(async (file) => {
      file = await fs.promises.readFile("blogdata/" + file, "utf-8");
      return myFiles.push(JSON.parse(file));
    })
  );
  res.status(200).json(myFiles); // since myfiles depends upon all files to be read and pushed in myfiles, that's why we have to use promise.all and map is used because promise.all was not working in foreach.
}
