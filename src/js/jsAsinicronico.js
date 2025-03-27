console.log("Paso 1"); // Síncrono (se ejecuta inmediatamente)


// setTimeout(() => {console.log("Paso 2");}, 1000);
  
setTimeout(() => {
  console.log("Paso 2"); // Asíncrono (se ejecuta después)
}, 1000);

console.log("Paso 3"); // Síncrono (no espera al setTimeout)


// async/await no es un reemplazo de fetch, sino una forma más limpia de manejar su resultado

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  async function getData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }  