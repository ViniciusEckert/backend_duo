import {response, Router} from "express"

import desenhosController from "./controllers/desenhos"
import personagensController from "./controllers/personagens"
import userController from "./controllers/user"
import {authentication} from "./middlewares/authentication"


const routes = Router();

routes.get("/", (request, response) => response.status(200).json({ success: true}))

routes.get("/char:id", authentication, personagensController.getById)

routes.get("/char", authentication, personagensController.list)

routes.post("/char", authentication, personagensController.create)

routes.put("/char/:id", authentication, personagensController.update)

routes.delete("/char/:id", authentication, personagensController.delete)

//

routes.get("/desenho",  desenhosController.list)

routes.post("/desenho", authentication, desenhosController.create)

routes.get("/desenho/:id", authentication, desenhosController.getById)

routes.delete("/desenho/:id", authentication, desenhosController.delete)

routes.put("/desenho/:id", authentication, desenhosController.update)

//

routes.put("/conectar:id", authentication, personagensController.conectar)

routes.delete("/desconectar:id", authentication, personagensController.desconectar)

//User Routes

routes.get("/user",  userController.list)

routes.post("/user/login",  userController.login)

routes.post("/user",  userController.create)

routes.put("/user/:id", authentication, userController.update)

routes.get("/user:id", authentication, userController.getById)

routes.delete("/user/:id", authentication, userController.delete)

export default routes