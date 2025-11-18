describe('Flujo de creación de usuario', () => {
    // Utilizar un email único para evitar conflictos, para ello usamos Date.now() concatenado al email
    const emailUsuario = `pablo${Date.now()}@test.com`;
    const passwordUsuario = 'Password123!';
  
    beforeEach(() => {
        cy.intercept({resourceType: /xhr|fetch/}, {log: false});
        cy.visit('http://automationexercise.com');
        cy.contains('Home').should('be.visible');
  });

  it('Registro de usuario', () => {
    // Ingresar a la página de registro
    cy.contains('li','Signup / Login').click();
    cy.url().should('include', '/login');

    // Validar que el formulario no permita campos vacíos
    cy.get('[data-qa="signup-button"]').click();
    cy.wait(1000);

    // Completar formulario de registro inicial
    cy.get('[data-qa="signup-name"]').type('Pablo Gómez QA');
    cy.get('[data-qa="signup-email"]').type(emailUsuario);
    cy.get('[data-qa="signup-button"]').click();
    
    // Account Information
    cy.get('#id_gender1').check();
    cy.get('#password').type(passwordUsuario);
    cy.get('#days').select('4');
    cy.get('#months').select('August');
    cy.get('#years').select('1994');

    // Opcionales: suscripciones (Pero igual vamos a seleccionarlas)
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Información personal
    cy.get('#first_name').type('Pablo');
    cy.get('#last_name').type('Tester');
    cy.get('#company').type('Toolbox');
    cy.get('#address1').type('Col. Morazan');
    cy.get('#address2').type('Pasaje El Carmen');
    cy.get('#country').select('Canada');
    cy.get('#state').type('San Salvador');
    cy.get('#city').type('Ciudad Delgado');
    cy.get('#zipcode').type('1101');
    cy.get('#mobile_number').type('+50377474850');

    // Enviar el formulario
    cy.get('[data-qa="create-account"]').click();

    // Validar creación de nuevo usuario
    cy.contains('Account Created!').should('be.visible');
    cy.wait(1000);
    cy.get('[data-qa="continue-button"]').click();
    cy.wait(1000);
    cy.contains('li','Logout').click();
  });

  it('Login de usuario', () => {
    cy.contains('li','Signup / Login').click();
    cy.url().should('include', '/login');
    cy.get('[data-qa="login-email"]').type(emailUsuario);
    cy.get('[data-qa="login-password"]').type(passwordUsuario);
    cy.get('[data-qa="login-button"]').click();
  });
});
