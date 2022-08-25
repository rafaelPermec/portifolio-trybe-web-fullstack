//ENTRADA DE DADOS
Console.WriteLine("Boas vindas ao programa 'Calcula Lâmpada'!");
Console.WriteLine("Informe o nome do cômodo: ");
string convenient = Console.ReadLine();

Console.WriteLine("Informe em metros a largura deste cômodo: ");
decimal width = decimal.Parse(Console.ReadLine());

Console.WriteLine("Informe em metros o comprimento deste cômodo: ");
decimal length = decimal.Parse(Console.ReadLine());

Console.WriteLine("Informe a potência em watts da lâmpada que será utilizada: ");
int power = int.Parse(Console.ReadLine());

//PROCESSAMENTO
decimal squareMeter = width * length;
decimal quotientX = power / 18M;
decimal totalLightBulbs = squareMeter / quotientX;

//SAIDA DE DADOS
Console.WriteLine("Para iluminar o cõmodo: " + convenient + " com " + squareMeter.ToString("N2") + " metros quadrados " + "será necessario a instalação de " + totalLightBulbs.ToString("N2") + " lâmpada(s)");
