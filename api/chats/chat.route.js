import express from "express";
import chatsController from "./chat.controller.js";
import { isAuthMiddleware } from "../../middleware/auth.middleware.js";
const chatRouter = express.Router();

/** GET /chats - Get chats page */
chatRouter.get("/", isAuthMiddleware, chatsController.getChats);

/** POST /chats/:chatId/messages - Add message to chat */
// chatRouter.post("/:chatId/messages", chatsController.addMessageToChat);

export default chatRouter;
