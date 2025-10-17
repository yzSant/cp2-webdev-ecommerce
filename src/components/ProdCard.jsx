import { Link } from "react-router-dom";

export default function ProdCard({title, price, image }) {
  return (
    <div className="flex flex-col border rounded-lg p-4 border-red-700 shadow hover:scale-102 transition transform duration-200">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4"/>
      <div className="p-1.5">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-lg font-bold text-red-700 mt-2">R$ {price}</p>
      </div>
      <div className="mt-auto">
        <Link to={`/produto/${id}`}>
          <div className="text-center mt-4 p-2 bg-white rounded text-red-700 font-medium hover:bg-red-50">
            Ver detalhes
          </div>
        </Link>
      </div>
    </div>
  );
}