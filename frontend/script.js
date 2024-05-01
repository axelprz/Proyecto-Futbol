fetch('/equipos')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Error al obtener los equipos.');
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
