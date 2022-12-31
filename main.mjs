import fs from "node:fs";

const someText = "Hello world";

fs.writeFile("message.txt", someText, (error) => {
  if (error) return;
  console.log("file has been saved");
});
