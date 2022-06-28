/**
 * Cenários:
 *
 *   - Quando não é passado um JWT para autenticação;
 *   - Quando a pessoa estudante é inserido com sucesso
 */

 const chai = require('chai');
const sinon = require('sinon');


const chaiHttp = require('chai-http');
chai.use(chaiHttp);

// Importação do modelo original
const { Patient, User } = require('../models');
// E do modelo fake, renomeado. No mesmo esquema do teste anterior
const { Patient: patientMock, User: userMock } = require('./mock/models');

const { expect } = chai;

const server = require('../app');

describe('GET /patient/plan', () => {

    describe('Quando não é passado um JWT para autenticação', () => {
        let response;
        before(async () => {
            response = await chai.request(server)
                .get("/patient/plan")
                .send({});
        });

        it('retorna código de status "401"', () => {
            expect(response).to.have.status(401);
        });

        it('retorna um objeto no body', () => {
            expect(response.body).to.be.an('object');
        });

        it('objeto de resposta possui a propriedade "message"', () => {
            expect(response.body).to.have.property('message');
        });

        it('a propriedade "message" possui a mensagem "Sem Token"', () => {
            expect(response.body.message).to.be.equal('Sem Token');
        });
    });

    describe('Quando lista os pacientes com sucesso', () => {
        let response;
        
        before(async () => {

            sinon.stub(User, 'findOne').callsFake(userMock.findOne);
            sinon.stub(Patient, 'findAll').callsFake(patientMock.findAll);

            responseLogin = await chai.request(server)
                .post("/login")
                .send({
                    user: "john.doe",
                    password: "test"
                });


            response = await chai.request(server)
                .get("/patient/plan")
                .set('authorization', responseLogin.body.token);
        });

        after(() => {
            User.findOne.restore();
            Patient.findAll.restore();
        })

        it('retorna código de status "200"', () => {
            expect(response).to.have.status(200);
        });

        it('o corpo da resposta é um array', () => {
            expect(response.body).to.be.an('array');
        });

        it('um ítem do objeto de resposta possui a propriedade "patient_id" e "plan"', () => {
            expect(response.body[0]).to.have.property('patient_id');
            expect(response.body[0]).to.have.property('plan');
        });
    });

});