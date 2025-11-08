import express from "express";
import { addMember, getUserWorkspaces } from "../controllers/workspaceController.js";

const WorkspaceRouter = express.Router();

WorkspaceRouter.get("/", getUserWorkspaces)
WorkspaceRouter.post("/add-member", addMember)

export default WorkspaceRouter