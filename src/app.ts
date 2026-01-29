import  express, { Router }  from "express"
import { Route } from "./core/interface"
class App{
    public app : express.Application 
    public port : string | number
    constructor(routes : Route[]){
        this.app = express()
        this.port = process.env.PORT || 5000
        this.initializeRoutes(routes)
        // this.initListen()
    }

    private initializeRoutes(routes:Route[]){
        routes.forEach((route)=>{
            this.app.use('/',route.router)
        })
    }
    public initListen (){
        this.app.listen(this.port,()=>{
            console.log(`Server is running on ${this.port}`)
        })  
    }
}
export default App