export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md">
      <div className="mb-3">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
          product.tagType === "best-seller" ? "bg-yellow-100 text-yellow-700" :
          product.tagType === "popular" ? "bg-purple-100 text-purple-700" :
          "bg-green-100 text-green-700"
        }`}>
          {product.tag}
        </span>
      </div>

      <div className="text-3xl mb-3">{product.icon}</div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      <div className="mb-4">
        <span className="text-2xl font-bold">${product.price}</span>
        <span className="text-gray-500 text-sm">/{product.period === 'monthly' ? 'Mo' : product.period === 'one-time' ? 'One-Time' : 'Yr'}</span>
      </div>

      <ul className="mb-6 space-y-2">
        {product.features.map((feature, idx) => (
          <li key={idx} className="text-sm text-gray-700 flex items-start">
            <span className="mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => onAddToCart(product)}
        className="w-full bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700"
      >
        Buy Now
      </button>
    </div>
  );
}
