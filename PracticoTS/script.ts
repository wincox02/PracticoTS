type Rating = {
    count: number;
    rate: number;
};

type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
};

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products: Product[]) => {
        let codigo: string = '<thead><tr><th>ID</th><th>Titulo</th><th>Descripcion</th><th>Precio</th></tr></thead><tbody>';

        for (let i = 0; i < products.length; i++) {
            const el = products[i];
            codigo += `<tr><td>${el.id}</td><td>${el.title}</td><td>${el.description}</td><td>${el.price}</td></tr>`;
        }
        codigo += '</tbody>';

        let tabla = document.querySelector('#tableElement')!;
        tabla.innerHTML = codigo

        const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
        spinnerElement.style.display = 'none';
    });
