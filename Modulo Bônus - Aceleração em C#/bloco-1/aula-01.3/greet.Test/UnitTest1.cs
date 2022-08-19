using Xunit;
using FluentAssertions;

namespace greet.Test;

public class UnitTest1
{
  [Theory(DisplayName = "Deve retornar a frase \"Olá Mundo!\"")]
  [InlineData("Olá Mundo!")]
  public void TestGreet(string expected)
  {
    var result = Class1.Greet();
    result.Should().Be(expected);
  }
}
