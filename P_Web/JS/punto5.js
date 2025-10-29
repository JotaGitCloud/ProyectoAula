const config = { tema: "oscuro", idioma: "es" };

const nuevaConfig = { ...config, version: "1.0" };

console.log("Config original:", config);
console.log("Config extendida:", nuevaConfig);