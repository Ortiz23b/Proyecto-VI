function entrar(){
  var user = document.getElementById("usuario").value;
  var pass = document.getElementById("password").value;

  if(user === "admin" && pass === "1234"){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.add("active-app");
  }else{
    alert("Usuario o contraseña incorrectos. Usa admin / 1234");
  }
}

function mostrar(id){
  var paginas = document.querySelectorAll(".page");

  paginas.forEach(function(pagina){
    pagina.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

function buscarProducto(texto){
  var textoNormalizado = texto.toLowerCase();
  var filas = document.querySelectorAll("#tablaProductos tr");

  filas.forEach(function(fila, index){
    if(index === 0){
      return;
    }

    var coincide = fila.innerText.toLowerCase().includes(textoNormalizado);

    fila.classList.toggle("hidden", !coincide);
  });
}

function guardarProducto(){
  var nombre = document.getElementById("nombre").value;
  var categoria = document.getElementById("categoria").value;
  var precio = document.getElementById("precio").value;
  var stock = document.getElementById("stock").value;

  if(nombre === "" || precio === "" || stock === ""){
    alert("Completa los campos principales");
    return;
  }

  var tabla = document.getElementById("tablaProductos");
  var cantidadFilas = tabla.rows.length;
  var fila = tabla.insertRow();

  fila.insertCell(0).innerText = cantidadFilas;
  fila.insertCell(1).innerText = nombre;
  fila.insertCell(2).innerText = categoria;
  fila.insertCell(3).innerText = "$" + precio;
  fila.insertCell(4).innerText = stock;
  fila.insertCell(5).innerHTML = '<button class="btn-small edit">Editar</button> <button class="btn-small delete">Eliminar</button>';

  document.getElementById("totalProductos").innerText = cantidadFilas;

  alert("Producto guardado en el prototipo");
  mostrar("productos");
}

document.getElementById("loginButton").addEventListener("click", entrar);
document.getElementById("busquedaProducto").addEventListener("keyup", function(evento){
  buscarProducto(evento.target.value);
});
document.getElementById("guardarProductoButton").addEventListener("click", guardarProducto);

document.querySelectorAll(".sidebar [data-page]").forEach(function(elemento){
  elemento.addEventListener("click", function(){
    mostrar(elemento.getAttribute("data-page"));
  });
});
