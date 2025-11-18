# toolbox_automation_test1
Descripción: Este automation test en cypress, ejecuta un flujo de creación de usuario + login en la web automationexercise.com

Pasos para ejecutar test:
1. Clonar repositorio https://github.com/pabloegp/toolbox_automation_test1.git
2. Validar que el equipo tenga Node.js y npm instalados usando en consola los comandos: "node -v" y "npm -v"
en caso de no estar instalados, entonces proceder con instalación
3. Inicializar proyecto con npm con comando "npm init -y" dentro de la carpeta del repo
4. Instalar cypress como dependencia del desarrollo
5. Abrir cypress usando el comando "npx cypress open" y configurar entorno en caso no este configurado, seleccionando "E2E Testing" cypress creará las carpetas correspondientes.
6. Seleccionar test: "frontend_test.cy.js" y esperar que termine la ejecución