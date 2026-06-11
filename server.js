const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".json": "application/json; charset=utf-8",
};

http.createServer((req, res) => {
  const requestPath = req.url.split("?")[0];
  const rawPath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.resolve(root, `.${decodeURIComponent(rawPath)}`);
  const finalPath = path.extname(filePath) ? filePath : path.join(filePath, "index.html");
  const relative = path.relative(root, finalPath);

  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(finalPath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, {"Content-Type": types[path.extname(finalPath)] || "application/octet-stream"});
    res.end(data);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`VELORA HOSPITALS running at http://localhost:${port}`);
});
