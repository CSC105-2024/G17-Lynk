import { Hono } from "hono";
import * as linkController from "../controllers/link.controller.ts";

const linkRouter = new Hono();

linkRouter.post("/", linkController.createLink);
linkRouter.get("/user/:userId", linkController.getLinksByUser);

export { linkRouter };
