import { Application, Request, Response } from "express";
import kids from  './router/kidsRouter'
export const mainApp = (app:Application) => {
    try {

        app.use("/api/v1", kids)
        app.get("/", (req: Request, res: Response) => {
            try {
                res.status(200).json({
                    message: "Welcome to Our Api"
                })
            }catch (error) {
                return res.status(404).json({
                    message: "Error ready default API"
                })
            }
        })
    } catch (error) {
        console.log(error)
    }
}