#PROYECTO WEBMOSAIC 

## Dependencias

Este proyecto utiliza las siguientes dependencias:

### Dependencias principales

- **aos**: ^2.3.4
  - Biblioteca para animaciones al hacer scroll.
- **axios**: ^1.7.2
  - Cliente HTTP basado en promesas para el navegador y node.js.
- **bootstrap**: ^5.3.3
  - Framework CSS popular para el desarrollo de interfaces responsivas.
- **hamburger-react**: ^2.5.1
  - Componentes de menú hamburguesa para React.
- **mysql2**: ^3.10.1
  - Cliente MySQL para node.js con soporte para Promesas.
- **next**: 14.2.4
  - Framework React para aplicaciones web y estáticas.
- **react**: ^18
  - Biblioteca para construir interfaces de usuario.
- **react-bootstrap**: ^2.10.4
  - Componentes de Bootstrap construidos con React.
- **react-dom**: ^18
  - Paquete de React para el DOM.
- **react-icons**: ^5.2.1
  - Conjunto de iconos populares como componentes de React.
- **serverless-mysql**: ^1.5.5
  - Cliente MySQL optimizado para entornos serverless.
- **sharp**: ^0.33.4
  - Biblioteca de procesamiento de imágenes de alto rendimiento.
- **styled-components**: ^6.1.11
  - Biblioteca para escribir estilos CSS en JavaScript.

### Dependencias de desarrollo

- **@types/node**: ^20
  - Tipos de TypeScript para Node.js.
- **@types/react**: ^18
  - Tipos de TypeScript para React.
- **@types/react-dom**: ^18
  - Tipos de TypeScript para React DOM.
- **@types/styled-components**: ^5.1.34
  - Tipos de TypeScript para styled-components.
- **eslint**: ^8
  - Herramienta de análisis estático para identificar patrones problemáticos en el código.
- **eslint-config-next**: 14.2.4
  - Configuración de ESLint para proyectos Next.js.
- **typescript**: ^5
  - Superconjunto tipado de JavaScript que se compila a JavaScript plano.

## Scripts


Los scripts definidos en este proyecto son:

- **dev**: `next dev`
  - Inicia el entorno de desarrollo.
- **build**: `next build`
  - Construye la aplicación para producción.
- **start**: `next start`
  - Inicia la aplicación en modo producción.
- **lint**: `next lint`
  - Ejecuta el linter para encontrar y arreglar problemas en el código.






## NAVEGACION:

en la navegacion de los archivos encontramos varias carpetas:

    ### app
        en app vemos todas las rutas de nuestro proyecto, por parte del back end tenemos:
        # /api
            aca tenemos todas las opciones de consulta de nuestra API tanto individual como general
        # /Emails
            tenemos el front-End del uso de /api
        el resto de las rutas son por parte del frontEnd
    ### libs
        en libs tenemos la configuracion de la base de datos 
    ### styles
        tenemos los estilos globlales
    ### ui
        tenemos todos los componenes nombrados por su debida ruta a la que pertenecen


## BACK-END:

    este proyecto usa una base de datos de mysql, ayudado con mariaDB y la dependiencia  **serverless-mysql** para el cliente y axios para las promesas, la coneccion es llamada como:

    la funcion de la pagina es simular la administracion de correos que se envia a webmosaic donde se revisa la peticion de cotizacion para proceder con la respuesta del correo con los precios, los correos se pueden crear, mostrar, eliminar y editar

    
    ``` 

    export const conn = mysql({
        config:{
            host: 'localhost',
            user: 'root',
            password: '123456',
            port: 3307,
            database: 'nextmysqlcrud'
        }
    })

    ```
    el resto de las configuraciones y localizacion de archivos se encuentran en * ## NAVEGACION *

## a tener en cuenta:

    el boton de Delete en el archivo src\app\Emails\[id]\buttons.jsx y src\app\Emails\[id]\page.jsx tienen un error que no entendi como solucionarlo, su funcionalidad es correcta, pero no refresca la pagina, da error 500, pero si borra la informacion.

    se puede refrescar la pagina, dirigirse a /Emails para comprobar que si se elimino


    