import FancyLogger from "./fancyLogger";
const LOGGER = new FancyLogger();

export default function logFirstImplementation() {
  LOGGER.printLogCount();
  LOGGER.log("First file");
  LOGGER.printLogCount();
}
