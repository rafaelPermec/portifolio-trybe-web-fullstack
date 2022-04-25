#!/home/geekchef/trybe-portfolio-exercicios-turma.XP-2021/modulo.3-BackEnd/B.19/aula-19.3/exercicios-bloco/docker-volumes/

docker run -d --name site-trybe2 -p 8881:80 -v "/home/geekchef/trybe-portfolio-exercicios-turma.XP-2021/modulo.3-BackEnd/B.19/aula-19.3/exercicios-bloco/docker-volumes/:/usr/local/apache2/htdocs/" httpd:2.4

docker inspect site-trybe2

docker stop site-trybe2

docker rm site-trybe2

ls -la