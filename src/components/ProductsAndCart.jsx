import { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../data/products.json';

export default function ProductsAndCart({ cartItems, onAddToCart, onRemoveFromCart, onCheckout }) {
  const [tab, setTab] = useState('products');

  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Premium Digital Tools</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Choose from our collection of premium digital products designed to boost your productivity.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setTab('products')}
            className={`px-6 py-3 rounded font-semibold ${
              tab === 'products'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => setTab('cart')}
            className={`px-6 py-3 rounded font-semibold ${
              tab === 'cart'
                ? 'bg-purple-600 text-white'
                : 'bg-white text-gray-900 border border-gray-300'
            }`}
          >
            Cart ({cartCount})
          </button>
        </div>

        {tab === 'products' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="bg-white rounded-lg p-8 text-center border border-gray-200">
                <p className="text-gray-600">Your cart is empty</p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Cart</h3>
                <div className="space-y-3 mb-6">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="text-pink-500 hover:text-pink-700 font-semibold text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Total:</span>
                    <span className="text-3xl font-bold text-gray-900">${cartTotal}</span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700"
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
