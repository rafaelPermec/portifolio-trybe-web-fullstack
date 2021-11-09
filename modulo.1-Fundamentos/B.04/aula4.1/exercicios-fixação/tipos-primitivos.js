/* Agora é a hora da mão na massa no código! No exemplo abaixo, temos as informações de um paciente. Utilize o operador typeof para imprimir qual o tipo das variáveis patientId , isEnrolled , patientInfo e patientEmail . Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: console.log(typeof patientId) retornará number . */ 


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

    console.log (typeof patientId);
    console.log (typeof isEnrolled);
    console.log (typeof patientInfo);
    console.log (typeof patientEmail);

/*     Agora que você já conhece os operadores aritméticos básicos do JavaScript, vamos praticá-los?  Vamos fazer algumas operações simples para encontrarmos a área e o perímetro de um retângulo de base 5 e altura 8.  */ 

const base = 5;
let height = 8;
const area = base * height;
    console.log (area);

const perimeter = (base * 2) + (height * 2);
    console.log(perimeter);