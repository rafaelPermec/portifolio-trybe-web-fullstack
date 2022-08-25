//Criando um enum
enum CardinalPoints
{
  Norte,
  Sul,
  Leste,
  Oeste
};
//Utilizando um enum
CardinalPoints direction = CardinalPoints.Norte;
Console.WriteLine("Ponto Cardeal: " + direction);

//Criando uma struct
struct Schedule
{
  public int hour, minute, second;
  public string shift;
}

//utilizando uma struct
Schedule now;
now.hour = 18;
now.minute = 04;
now.second = 42;
now.shift = "AM";
Console.WriteLine("Horário: " + now.hour + ":" + now.minute + ":" + now.second + " " + now.shift);

// Em uma struct é permitido que se utilize construtor e métodos para se ter mais controle dos valores manipulados, veja na alteração a seguir:

//Criando uma struct
struct Schedule
{
  private int hour, minute, second;
  private string shift;

  //Construtor da struct
  public Schedule(int hour, int minute, int second, string shif)
  {
    this.hour = hour % 24;
    this.minute = minute % 60;
    this.second = second % 60;
    this.shift = shif;
  }

  // metodo da struct
  public string getSchedule()
  {
    return hour.ToString() + ":" + minute.ToString() + ":" + second.ToString() + " " + shift;
  }
}

//Incializando uma struct com construtor
Schedule now = new Schedule(10, 30, 0, "AM");
Console.WriteLine("Horario: " + now.getSchedule());
