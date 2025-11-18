# toolbox_automation_test1
Descripción: Este automation test en cypress, ejecuta un flujo de creación de usuario + login en la web automationexercise.com

Pasos para ejecutar test:
1. Clonar repositorio https://github.com/pabloegp/toolbox_automation_test1.git
2. Validar que el equipo tenga Node.js y npm instalados usando en consola los comandos: "node -v" y "npm -v"
en caso de no estar instalados, entonces proceder con instalación
3. Instalar dependencias con "npm install" y verificar que la estructura de carpetas este correcta con la carpeta "e2e" cpm los archivos ".cy.js"
4. Instalar cypress como dependencia del desarrollo (Si se presenta algún error, caso contrario, con el paso 3 basta)
5. Abrir cypress usando el comando "npx cypress open" y configurar entorno en caso no este configurado, seleccionando "E2E Testing" cypress creará las carpetas correspondientes.
6. Seleccionar test: "frontend_test.cy.js" y esperar que termine la ejecución

# Mejoras de UI
1. Si bien es cierto, nombre y correo no se reingresan en el "Enter Account Information", sería ideal cargar la información hasta este punto para evitar la sobrecarga de formularios en la pantalla de login o registro. En cambio podemos dejar solamente el formulario de login en el centro y el botón de registro, de modo que la experiencia de usuario sea más fluida.
2. Mejorar el estilo de la interfaz permitirá al usuario sentir una UI más amigable y atrativa, sobre todo en el formulario apilado.
3. Podemos considerar manejar la seguridad del password, de modo que el usuario pueda conocer si su contraseña es vulnerable o robusta.
4. Manejar catálogos dinámicos para los campos país, estado y ciudad, ayudaría a la selección de modo que no existan inconsistencias en los datos finales, así como tampoco limitaciones en la selección de país por ejemplo.

# toolbox_automation_test2

Descripción: Ejecución de prueba de APIS:
1. https://echo-serv.tbxnet.com/v1/qa/test1
2. https://echo-serv.tbxnet.com/v1/system/ping

Para ambas APIS, no tengo sugerencias inmediatas, ya que retornan como valor principal, la fecha de ejecución y el estado.