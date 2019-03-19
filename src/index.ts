import express from "express";
import path from "path";
import * as register from "./routes";
const app = express();
const port = 8080;

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );

register.register(app);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
});
