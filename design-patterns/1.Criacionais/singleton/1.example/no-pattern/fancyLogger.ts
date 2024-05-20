export default class FancyLogger {
  public logs: string[] = [];

  public log(message: string) {
    this.logs.push(message);
    console.log("FANCY LOGGER:", message);
  }

  public printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}
