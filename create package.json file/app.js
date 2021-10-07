/*
El archivo package.json es el responsable de almacenar toda la metadata de un proyecto (nombre del proyecto, versión, etc).
Escribir en consola npm init
*/

/*
Para instalar un paquete se puede ir a la página www.npmjs.com y luego escribir en consola "npm install (nombre del paquete)".
Por ejemplo: npm install express.
Para desinstalar un paquete escribir en consola "npm uninstall (nombre del paquete)".
*/

/*
En el archivo package.json se encuentran las dependencies que son los paquetes instalados en el proyecto.
Esto muestra la versión y cada número significa: (1.7.18) => versión mayor.versión menor.parche

El símbolo ^ establece que si sale una nueva versión mayor no actualice automaticamente el paquete ya instalado
pero si hay una nueva versión menor o parche si se actualiza.
Si se pone el símbolo ~ se establece que se pueden hacer solo actualizaciones de parche.
Si no se pone ningún símbolo no se realizan actualizaciones y se mantiene la misma versión siempre.
*/
