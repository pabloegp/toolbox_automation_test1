# toolbox_automation_test1
Descripción: Este automation test en cypress, ejecuta un flujo de creación de usuario + login en la web automationexercise.com

Selección: frontend_test.cy.js

Pasos para ejecutar test:
1. Clonar repositorio https://github.com/pabloegp/toolbox_automation_test1.git
2. Validar que el equipo tenga Node.js y npm instalados usando en consola los comandos: "node -v" y "npm -v"
en caso de no estar instalados, entonces proceder con instalación
3. Instalar dependencias con "npm install" y verificar que la estructura de carpetas este correcta con la carpeta "e2e" cpm los archivos ".cy.js"
4. Instalar cypress como dependencia del desarrollo (Si se presenta algún error, caso contrario, con el paso 3 basta)
5. Abrir cypress usando el comando "npx cypress open" y configurar entorno en caso no este configurado, seleccionando "E2E Testing" cypress creará las carpetas correspondientes.
6. Seleccionar test: "frontend_test.cy.js" y esperar que termine la ejecución

# Mejoras de UI
Comparto algunas observaciones y recomendaciones identificadas durante la revisión de la experiencia de usuario en el registro e inicio de sesión en "Automation Exercise", con el objetivo de optimizar la usabilidad, seguridad y consistencia de datos:

1. Optimización del flujo de registro: Actualmente, los campos de nombre y correo no se reingresan en la sección "Enter Account Information". Sería ideal precargar esta información hasta este punto para reducir la sobrecarga visual en el formulario. Como mejora, proponemos simplificar la pantalla de inicio de sesión, mostrando únicamente el formulario de acceso y el botón de registro, lo que contribuiría a una experiencia más fluida e intuitiva.
2. Mejora estética de la interfaz: Sugerimos refinar el diseño de la interfaz, en particular en el formulario apilado de "Enter Account Information", para lograr una apariencia más atractiva, moderna y amigable que mejore la percepción del usuario.
3. Indicador de seguridad de contraseñas: Sería beneficioso implementar un sistema que permita al usuario evaluar la robustez de su contraseña durante el registro, mostrando indicaciones claras sobre su nivel de seguridad (ej. vulnerable, aceptable, robusta).
4. Catálogos dinámicos para ubicaciones: Recomendamos integrar catálogos dinámicos y dependientes para los campos de país, estado y ciudad. Esto facilitaría la selección, evitaría inconsistencias en los datos almacenados y eliminaría limitaciones en la elección de opciones válidas.
5. Validación de tipos de datos: Es importante implementar validaciones específicas para cada campo, asegurando que los datos ingresados correspondan al tipo esperado (texto en campos alfabéticos y valores numéricos donde sea necesario), con el fin de garantizar la consistencia e integridad de la información.

# toolbox_automation_test2
Descripción: Este automation test en cypress ejecuta prueba de dos APIS seleccionadas, siendo estas:
1. https://echo-serv.tbxnet.com/v1/qa/test1
2. https://echo-serv.tbxnet.com/v1/system/ping

Selección: api_test.cy.js

Para ambas APIS, no tengo sugerencias inmediatas, ya que retornan como valor principal, la fecha de ejecución y el estado. Sin embargo, dentro del script de automatización se evalúa el status code devuelto, para que se pueda saber en donde falló la ejecución y bajo que código de error.