import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import fileupload from "express-fileupload";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true, //para guardar en una carpeta local
    tempFileDir: "./upload", //ruta donde se guardara las imagenes localmente
  })
);

//routes
app.use(postsRoutes);
app.use(express.static(join(__dirname, "../client/build")));

app.get('*',(req,res)  => {
  res.sendFile((join(__dirname, "../client/build.index.html")))
})

export default app;
