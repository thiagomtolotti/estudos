export function checkValue() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const value = args[0];

      if (value < 0) {
        console.error(
          "Não é possível realizar essa operação com um valor negativo"
        );

        return;
      }

      return originalMethod.apply(this, args);
    };
  };
}
