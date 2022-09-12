/// <reference types="Cypress" />

const URL = '127.0.0.1:8080';

before(() => {
  cy.visit(URL);
})

describe('Comprobar casa de cambio', () => {

  it('Se asegura select predeterminados', () => {
    cy.get('#moneda-1').should('have.value', 'BTC - Bitcoin');
    cy.get('#moneda-2').should('have.value', 'USD - United States Dollar');
  });

  it('Se asegura cantidad predeterminada', () => {
    cy.get('#cantidad').should('have.value', '1');
  });

  it('Se asegura que la fecha sea del dia', () => {
    cy.get('#fecha').should('have.value', deloverFechaDelDia());
  });

});

describe('Usar casa de cambio', () =>{
  
  it('Seleccionar monedas', () =>{
    cy.get('#moneda-1').select('USD - United States Dollar');
    cy.get('#moneda-2').select('ARS - Argentine Peso');
  });

  it('Escribir cantidad', () =>{
    cy.get('#cantidad').clear().type('200');
  });

  it('Seleccionar fecha', () => {
    cy.get('#fecha').clear().type('2021-01-01');
  });
  
  it('Convertir cambio', () =>{
    cy.get('#boton-convertir').click();
  });
  

  
  
});

function deloverFechaDelDia() {
  const fecha = new Date;
  let dia = String(fecha.getDate());
  let mes = String(fecha.getMonth() + 1);
  let anio = String(fecha.getFullYear());

  if (Number(mes) < 10) {
    mes = '0' + mes
  }
  if (Number(dia) < 10) {
    dia = '0' + dia
  }

  return `${anio}-${mes}-${dia}`;

}