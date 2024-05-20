import FancyLogger from "./fancyLogger";
const LOGGER = new FancyLogger();

export default function logSecondImplementation() {
  LOGGER.printLogCount();
  LOGGER.log("Second file");
  LOGGER.printLogCount();
}
