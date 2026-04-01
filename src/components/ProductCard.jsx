export default function ProductCard({ product, onAddToCart }) {
  const getTagColor = (tagType) => {
    if (tagType === "best-seller") return "bg-yellow-100 text-yellow-600";
    if (tagType === "popular") return "bg-purple-100 text-purple-600";
    if (tagType === "new") return "bg-green-100 text-green-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${getTagColor(product.tagType)}`}>
          {product.tag}
        </span>
      </div>

      <div className="mb-4 text-4xl">{product.icon}</div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>

      <p className="text-gray-600 text-sm mb-4">{product.description}</p>

      <div className="mb-4">
        <span className="text-2xl md:text-3xl font-bold text-gray-900">${product.price}</span>
        <span className="text-gray-500 text-sm">/{product.period === 'monthly' ? 'Mo' : product.period === 'one-time' ? 'One-Time' : 'Year'}</span>
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
        className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 text-sm md:text-base transition-colors"
      >
        Buy Now
      </button>
    </div>
  );
}
