class FancyLogger {
  private static instance: FancyLogger;
  public logs: string[] = [];

  constructor() {
    if (!FancyLogger.instance) {
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }

  public log(message: string) {
    this.logs.push(message);
    console.log("FANCY LOGGER:", message);
  }

  public printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const LOGGER = new FancyLogger();
Object.freeze(LOGGER);
export default LOGGER;
