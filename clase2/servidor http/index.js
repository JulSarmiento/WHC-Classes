// Requerimos el modulo http de node.js
const http = require('http');

// Definimos la constante HOST que sera el host( o dominio) donde correrá el servidor
const HOST = 'localhost';
// Definimos la constante PORT que sera el puerto donde correrá el servidor
const PORT = 8080;

const writeHtmlResponse = (response, htmlCode) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // Enviamos el codigo de estado 200 y el mensaje de respuesta
  response.writeHead(200);
  response.end(htmlCode);
}

const writeJSONResponse = (response, json) => {
  response.setHeader('Content-Type', 'application/json');
  // Enviamos el codigo de estado 200 y el mensaje de respuesta
  response.writeHead(200);
  response.end(JSON.stringify(json));
}

const products = [
  {
    id: 1,
    name: 'Reloj',
    price: 1000,
    description: 'Descripción del producto 1',
    cuantity: 10
  },
  {
    id: 2,
    name: 'Collar',
    price: 2000,
    description: 'Descripción del producto 2',
    cuantity: 20
  },
  {
    id: 3,
    name: 'Anillo',
    price: 3000,
    description: 'Descripción del producto 3',
    cuantity: 30
  },
  {
    id: 4,
    name: 'Pulsera',
    price: 4000,
    description: 'Descripción del producto 4',
    cuantity: 40
  }
]

//  Instanciamos servidor empleando el metodo createServer de http con un mensaje de respuesta.
const server =  http.createServer( async (request, response) => {
  const url = request.url;
  console.log('url', url);

  let body = "";

  await request.on('data', (chunk) => {
    body += chunk;
  });

  if(url === '/other'){
    writeHtmlResponse(response, '<h1>Otra página</h1>');

  } else if (url === '/ping') {
    writeHtmlResponse(response, '<h1>Pong</h1>');

  } else if (url === '/api/v1/products') {
    const method = request.method;
    console.log('method', method);

    if(method === 'GET') {
      writeJSONResponse(response, products);

    } else if(method === 'POST') {
      products.push(JSON.parse(body));
      writeJSONResponse(response, products);      

    } else if (method === 'DELETE') {
      const id = JSON.parse(body).id;
      const productIndex = products.findIndex(product => product.id === id);
      products.splice(productIndex, 1);
      writeJSONResponse(response, products);
    }

  }else {
    writeHtmlResponse(response, '<h1>Hola Mundo</h1>');
  }
  
});

// Iniciamos el servidor con el metodo listen de server
server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});