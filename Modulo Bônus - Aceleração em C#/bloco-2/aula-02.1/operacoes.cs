//Adição
int a = 50, b = 50;
int result1 = a + b;
Console.WriteLine(a + " + " + b + " = " + result1);

//Subtração
int c = 77, d = 21;
int result2 = c - d;
Console.WriteLine(c + " - " + d + " = " + result2);

//Multiplicação
int e = 5, f = 5;
int result3 = e * f;
Console.WriteLine(e + " * " + f + " = " + result3);

//divisão
int g = 90, h = 9;
int result4 = g / h;
Console.WriteLine(g + " / " + h + " = " + result4);

//módulo
int i = 36, j = 7;
int result5 = i % j;
Console.WriteLine("O resto da divisão de " + i + " por " + j + " é " + result5);

//ordem de execução
int a = 5, b = 10, c = 15;
int result1 = (a + b * c);
Console.WriteLine("(" + a + " + " + b + " * " + c + ") = " + result1);

//utilizando parênteses
int result2 = ((a + b) * c);
Console.WriteLine("((" + a + " + " + b + ") * " + c + ") = " + result2);

int a = 1;
//incrementa + 1 ao valor de a
a++; //substitui a instrução a = a + 1 
Console.WriteLine("A = " + a);

int b = 10;
//decrementa o -1 ao valor b
b--; //substitui a instrução b = b - 1
Console.WriteLine("B = " + b);

//incrementa qualquer valor à direita na variável à esquerda
int c = 23;
c += 15; //substitui a instrução c = c + 15 
Console.WriteLine("C = " + c);

//decrementa qualquer valor à direita na variável à esquerda
int d = 100;
d -= 25; //substitui a instrução d = d - 25 
Console.WriteLine("D = " + d);

//incrementa multiplicando qualquer valor à direita na variável à esquerda
int e = 11;
e *= 3; //substitui a instrução e = e * 3 
Console.WriteLine("E = " + e);

//decrementa dividindo qualquer valor à direita na variável à esquerda
decimal f = 11;
f /= 3; //substitui a instrução f = f / 3 
Console.WriteLine("F = " + f.ToString("N2"));

//decrementa com a operação de módulo de qualquer valor à direita na variável à esquerda
decimal g = 11;
g %= 3; //substitui a instrução g = g % 3 
Console.WriteLine("G = " + g.ToString("N2"));
