// Protótipo - objeto original
const zombie = {
  eatBrains() {
    return "yum 🧠";
  },
};

// Clone - Novo objeto baseado no protótipo com propriedades adicionais
const chad = Object.create(zombie, { name: { value: "chad" } });
// Clone de 'chad'
const babyChad = Object.create(chad, { baby: { value: true } });

// Só loga a propriedade 'nome' e não o método eatBrains
console.log(chad);
// Funciona! JS 'sobe' a cadeia de protótipos até que ache o método
console.log(chad.eatBrains());

// Mostram o método eatBrains
chad.__proto__;
Object.getPrototypeOf(chad);

// Anti-pattern pois altera objeto nativo do javascript
Array.prototype.bad = function () {
  console.log("I'm bad");
};
