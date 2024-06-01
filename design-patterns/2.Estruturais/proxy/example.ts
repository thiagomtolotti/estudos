const original = { name: "Jeff" };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log("Tracking:", key);
    return target[key];
  },

  set(target, key, value) {
    console.log("Updating UI");
    return Reflect.set(target, key, value);
  },
});

reactive.name; // Traking: name
reactive.name = "Bob"; // Updating UI
