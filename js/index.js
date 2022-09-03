function insertar(v1, v2, v3) {
  const ubicacion = document.getElementById("ubicar");

  let tabla = `

        
          <tr>
            <td>${v1}</td>
            <td>${v2} </td>
            <td>${v3}</td>
          </tr>
  `;

  ubicacion.innerHTML += tabla;
}

function buscarDato(valor) {
  let valorR = document.getElementById(valor).value;
  console.log(valorR);
  return valorR;
}

function recogerFormulario() {
  let formulario = document.getElementById("formulario");
  console.log(nombre);

  formulario.addEventListener("submit", function (event) {
    let nombre = buscarDato("nombre");
    let apellido = buscarDato("apellido");
    let hobby = buscarDato("hobby");
    insertar(nombre, apellido, hobby);
    event.preventDefault();
  });
}

recogerFormulario();
