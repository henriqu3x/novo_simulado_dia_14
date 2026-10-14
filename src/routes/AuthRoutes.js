import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import AuthControllers from '../controllers/AuthControllers.js'

const AuthRoutes = express.Router()
const auth_controllers = new AuthControllers()

AuthRoutes.post('/login',/* #swagger.tags = ['Auth'] */ expressAsyncHandler(auth_controllers.login))

export default AuthRoutes