import { Router } from "express";
import { closeAccount, getAccount, getAllAccounts } from "../controller/compte.controller.js";


const routerCompte = Router()

routerCompte.get("/getAllAccounts",getAllAccounts )
routerCompte.get("/getAccount/:numero", getAccount)
routerCompte.delete("/closeAccount/:numero", closeAccount)


export default routerCompte