import app from "./app";
import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor ligado na porta ${port}`)
});