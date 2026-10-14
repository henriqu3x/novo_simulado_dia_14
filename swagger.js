import swaggerAutoGen from 'swagger-autogen'

const options = {
     openapi:'3.0.0'
}

const doc = {
     info: {
          title: 'Saber+ biblioteca',
          description: 'Documentação da api da biblioteca saber+',
          version: '1.0.0'
     },

     servers: [
          {
               url: 'http://localhost:3000/api/v1'
          }
     ],

     tags: [
          {
               name: 'Auth',
               description: 'Autenticação'
          },
          {
               name: 'Usuarios',
               description: 'Gerenciamento de usuarios'
          },
          {
               name: 'Autores',
               description: 'Gerenciamento de autores'
          },
          {
               name: 'Categorias',
               description: 'Gerenciamento de categorias'
          },
          {
               name: 'Livros',
               description: 'Gerenciamento de livros'
          },
          {
               name: 'Exemplares',
               description: 'Gerenciamento de exemplares'
          },
          {
               name: 'Emprestimos',
               description: 'Gerenciamento de emprestimos'
          },
          {
               name: 'Devoluções',
               description: 'Gerenciamento de devoluções'
          },
     ],

     components: {
          securitySchemes: {
               bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    format: 'JWT'
               }
          }
     },

     security: [
          {
               bearerAuth: []
          }
     ]
}

const outputFile = './swagger-output.json'

const endpointFile = ['./src/routes/index.js']

swaggerAutoGen(options)(outputFile,endpointFile,doc)