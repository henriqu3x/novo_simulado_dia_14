const AdminMiddlewares = (req,res,next) => {
     try {
          const perfil = req.user?.perfil

          if (perfil != 'admin') {
               return res.status(403).json({
                    "error": "Voce não possui autorização para acessar essa função"
               })
          }

          next()
     } catch (error) {
          return res.status(400).json({
               "error": error.message
          })
     }
}

export default AdminMiddlewares