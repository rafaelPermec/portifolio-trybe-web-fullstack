-- 1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';
-- 2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.
SELECT Name FROM Scientists.Projects
WHERE Code LIKE 'A%'
ORDER BY Name ASC;
-- 3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.
SELECT Code FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Code ASC;
-- 4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT Scientist FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');
-- 5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects
WHERE Hours >= 500;
-- 6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Scientists.Projects
WHERE Hours >= 250 AND Hours < 800 ;
-- OU
SELECT * FROM Scientists.Projects
WHERE Hours BETWEEN 250 AND 800 ;
-- 7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.
SELECT Code, Name FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';
-- 8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.
SELECT Name FROM Scientists.Projects
WHERE Code LIKE '%h%';
