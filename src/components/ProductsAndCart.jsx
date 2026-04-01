import { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';

export default function ProductsAndCart({ cartItems, onAddToCart, onRemoveFromCart, onCheckout }) {
  const [tab, setTab] = useState('products');
  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="text-center text-sm md:text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 flex-wrap">
          <button
            onClick={() => setTab('products')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
              tab === 'products'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setTab('cart')}
            className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-colors text-sm md:text-base ${
              tab === 'cart'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>

        {tab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

        {tab === 'cart' && (
          <div className="max-w-3xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg p-8 md:p-12 text-center border border-gray-200">
                <p className="text-gray-600 text-base md:text-lg">Your cart is empty</p>
              </div>
            ) : (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Your Cart</h3>
                <div className="space-y-3 md:space-y-4 mb-6">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                        <span className="text-2xl md:text-3xl flex-shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.name}</h4>
                          <p className="text-xs md:text-sm text-gray-600">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-pink-500 hover:text-pink-700 font-semibold text-xs md:text-sm whitespace-nowrap"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-4 md:p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-4 md:mb-6 pb-3 md:pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-medium text-sm md:text-base">Total:</span>
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">${cartTotal}</span>
                  </div>
                  <button 
                    onClick={onCheckout}
                    className="w-full bg-purple-600 text-white py-2 md:py-3 rounded-full font-semibold hover:bg-purple-700 transition text-sm md:text-base"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
