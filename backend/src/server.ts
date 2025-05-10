import dotenv from  'dotenv';
import { Express, Request, Response, RequestHandler} from 'express';
import createApp from './app';


// set up the environment configuration
dotenv.config({path: "./.env"});

// bootstrap our express application
const app: Express = createApp();

const apiHome = (request: Request, response: Response): void => {
    response.status(200).send(["Peter"]);
}


app.get("/", apiHome)

// set the PORT number
const PORT: string | number = process.env.PORT || 3000;

// listen for incoming request
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
})