fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    var codigo = '<thead><tr><th>ID</th><th>Titulo</th><th>Descripcion</th><th>Precio</th></tr></thead><tbody>';
    for (var i = 0; i < products.length; i++) {
        var el = products[i];
        codigo += "<tr><td>".concat(el.id, "</td><td>").concat(el.title, "</td><td>").concat(el.description, "</td><td>").concat(el.price, "</td></tr>");
    }
    codigo += '</tbody>';
    var tabla = document.querySelector('#tableElement');
    tabla.innerHTML = codigo;
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});
