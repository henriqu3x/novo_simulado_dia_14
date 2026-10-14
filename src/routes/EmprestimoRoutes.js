import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import EmprestimoControllers from '../controllers/EmprestimoControllers.js'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'

const EmprestimoRoutes = express.Router()
const emprestimo_controllers = new EmprestimoControllers()

EmprestimoRoutes.get('/',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimo_controllers.visualizar))
EmprestimoRoutes.get('/:id',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimo_controllers.buscarPorId))
EmprestimoRoutes.post('/',/* #swagger.tags = ['Emprestimos'] */ AuthMiddlewares, expressAsyncHandler(emprestimo_controllers.adicionar))


export default EmprestimoRoutes