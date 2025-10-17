import { useEffect, useState } from "react";
import ProdCard from "../components/ProdCard";
import ProdContainer from "../components/ProdContainer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API}products/`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Erro ao buscar produtos:", err));

    fetch(`${API}products/`)
      .then(res => res.json())
      .then(data => { setPrice(data.price) })
      .catch(err => console.error(err));

    fetch(`${API}products/`)
      .then(res => res.json())
      .then(data => { setTitle(data.title) })
      .catch(err => console.error(err));

    fetch(`${API}products/`)
      .then(res => res.json())
      .then(data => { setImage(data.image) })
      .catch(err => console.error(err));
    }, [API]);

  console.log(setPrice);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Nossos Produtos</h1>

      <ProdContainer title="Produtos de destaque">
        <>
        {products.map(product => (
          <ProdCard
            name={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
        </>
      </ProdContainer>
    </div>
  );
}