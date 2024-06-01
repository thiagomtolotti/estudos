class IOSButton {}

class AndroidButton {}

// Sem factory - Difícil manutenção
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

// Com factory
class ButtonFactory {
  createButton(os: string): IOSButton | AndroidButton {
    if (os === "ios") return new IOSButton();

    return new AndroidButton();
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton(os);
const btn2 = factory.createButton(os);
