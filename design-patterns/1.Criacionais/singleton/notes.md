# Singleton Pattern

- Tipo de objeto que só pode ser instanciado uma vez

- Serve para compartilhar as informações ao longo de toda a aplicação

  - Singleton é como um 'provider' e qualquer objeto que use ele é um 'consumer'

- Pode trazer problemas como a criação de uma variável global na aplicação

  - Torna tudo mais difícil de testar porque cria a necessidade de se ter o Singleton para fazer os testes

  - Cria [acoplamento](<https://en.wikipedia.org/wiki/Coupling_(computer_programming)#:~:text=In%20software%20engineering%2C%20coupling%20is,of%20the%20relationships%20between%20modules>) entre as diferentes partes da aplicação porque a aplicação se torna dependente do Singleton

  - Race condition: quando o Singleton é alterado ou lido em dois lugares ao mesmo tempo pode ser sobrescrito ou lido incorretamente

- Alguns defendem que Singleton nunca deve ser utilizado
