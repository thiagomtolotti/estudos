import LOGGER from "./fancyLogger";

export default function logSecondImplementation() {
  LOGGER.printLogCount();
  LOGGER.log("Second file");
  LOGGER.printLogCount();
}
