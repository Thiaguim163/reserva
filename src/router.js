import { Router } from "express";
import multer from "multer";
import uploadConfig from "./src/config/upload";
import SessionController from "./src/controllers/SessionController";
import HouseController from "./src/controllers/HouseController";
import DashboardController from "./src/controllers/DashboardController";
import ReserveController from "./src/controllers/ReserveController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/houses", upload.single("thumbnail"), HouseController.store);
routes.get("/houses", HouseController.index);
routes.put(
  "/houses/:house_id",
  upload.single("thumbnail"),
  HouseController.update
);
routes.delete("/houses", HouseController.destroy);

routes.get("/dashboard", DashboardController.show);

routes.post("/houses/:houses_id/reserve", ReserveController.store);
routes.get("/reserves", ReserveController.index);
routes.delete("/reserves/cancel", ReserveController.destroy);

export default routes;
