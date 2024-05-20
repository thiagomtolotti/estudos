# Command pattern

[Web Dev Simplified (vídeo)](https://www.youtube.com/watch?v=GQzfF5EMD7o&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=6)

- "Pegar as diferentes operações que algo deve fazer e encapsular em comandos individuais que tem métodos 'execute' e 'undo', permitindo fazer e desfazer a ação"
- Exemplo de aplicação: Salvar um usuário em uma banco de dados e depois 'undo'

#### Exemplo: Editor de texto

Editores de texto tem um botão para deixar o texto bold, um atalho para a mesma função e um atalho de undo (ctrl + z).

É esperado que clicar no botão ou usar o atalho tenham exatamente o mesmo comportamento, e se for para 'desligar' o bold o atalho ctrl+z tem o mesmo efeito dos dois.

É possível implementar um 'Bold Command' para realizar essas ações sem precisar reescrever nenhuma linha de códido
