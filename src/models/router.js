import { Routes } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import DashboardController from "./controllers/DashboardController";
import ReserveController from "./controllers/ReserveController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.get("/houses", upload.single("thumbnail"), HouseController.store);
routes.get("/houses", HouseController.index);
routes.put("/houses", upload.single("thumbnail"), HouseController.update);
routes.delete("/houses/:house_id", HouseController.destroy);

routes.get("/dashboard", DashboardController.show);

routes.post("/houses/:house_id/reserve", ReserveController.store);
routes.get("/reserve", ReserveController.index);
routes.delete("/reserve/:cancek", ReserveController.destroy);

export default routes;
