-- 1. Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT "This is SQL Exercise, Practice and Solution" AS Projects;
SELECT "Rafael Perdigão" AS Scientist;
-- 2. Escreva uma query para exibir três números em três colunas.
SELECT 42 AS the_awnser;
SELECT 77 AS like_in_cbgb;
SELECT 86 AS soldier_down;
-- 3. Escreva uma query para exibir a soma dos números 10 e 15.
SELECT (10+15) AS mathematics;
-- 4. Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT COUNT(10+15) AS mathematics;
-- 5. Escreva uma query para exibir todas as informações de todos os cientistas.
SELECT * FROM Scientists;
-- 6. Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT * FROM Scientists.Name AS Nome do Projeto;
SELECT * FROM Scientists.Hours AS Tempo de Trabalho;
-- 7. Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT * FROM Scientists.Name ORDER BY Name ASC;
-- 8. Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT * FROM Scientists.Name ORDER BY Name DESC;
-- 9. Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT("O projeto " + Projects.Name + " precisou de " + Projects.Hours + " horas para ser concluído.") FROM Projects;
-- 10. Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT Hours, Name FROM Projects ORDER BY Hours, Name ASC LIMIT 3; 
-- 11. Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT * FROM AssignedTo;
-- 12. Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 1;
-- 13. Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
-- 14. Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects ORDER BY Hours DESC LIMIT 5;
-- 15. Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT("Existem " + COUNT(Projects.Name) + " na tabela Scientists.") FROM Projects;
