import express from "express";
import postsRoutes from "./routes/posts.routes.js";
import fileupload from "express-fileupload";

const app = express();

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

export default app;
