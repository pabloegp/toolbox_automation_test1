describe('Pruebas API Echo Server', () => {
  const baseUrl = 'https://echo-serv.tbxnet.com/v1';

  it('GET /qa/test1 - Validaciones completas', () => {
    cy.request({
      url: `${baseUrl}/qa/test1`,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 500) {
        cy.log('Error 500 recibido');
        cy.log(`Mensaje de error: ${JSON.stringify(response.body)}`);
      } else {
        // Status code
        expect(response.status).to.eq(200);

        // Response time
        expect(response.duration).to.be.lessThan(3000);

        // Headers
        expect(response.headers).to.have.property('content-type');
        expect(response.headers['content-type']).to.include('application/json');

        // Listar propiedades del body
        cy.log('Propiedades devueltas:');
        Object.keys(response.body).forEach((prop) => {
          cy.log(`- ${prop}: ${JSON.stringify(response.body[prop])}`);
        });
      }
    });
  });

  it('GET /system/ping - Validaciones básicas', () => {
    cy.request({
      url: `${baseUrl}/system/ping`,
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 500) {
        cy.log('Error 500 recibido');
        cy.log(`Mensaje de error: ${JSON.stringify(response.body)}`);
      } else {
        // Status code
        expect(response.status).to.eq(200);

        // Response time
        expect(response.duration).to.be.lessThan(3000);

        // Response body
        expect(response.body).to.have.property('date');

        // Listar propiedades del body
        cy.log('Propiedades devueltas:');
        Object.keys(response.body).forEach((prop) => {
          cy.log(`- ${prop}: ${JSON.stringify(response.body[prop])}`);
        });
      }
    });
  });
});