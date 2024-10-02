import express from "express";
import {
  signInCtrl,
  getMeCtrl,
  signUpCtrl,
} from "../controllers/auth.controllers.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import {
  signInValidation,
  signUpValidation,
} from "../validations/auth.validations.js";
import { applyValidations } from "../validations/auth.validations.js";

const authRouter = express.Router();

authRouter.post("/sign-in", signInValidation, applyValidations, signInCtrl);
authRouter.post("/sign-up", signUpValidation, applyValidations, signUpCtrl);
authRouter.get("/me", validateJwt, getMeCtrl);

export default {
  authRouter
}