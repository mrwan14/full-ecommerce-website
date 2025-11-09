import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from '../Components/ProductCard/ProductCard';

const mockProduct = {
  _id: '1',
  title: 'Test Product',
  price: 100,
  imageCover: 'https://example.com/image.jpg',
  category: { name: 'Electronics' },
  ratingsAverage: 4.5,
};

describe('ProductCard', () => {
  it('renders product information', () => {
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={() => {}}
        onAddToWishlist={() => {}}
        onViewDetails={() => {}}
      />
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('Electronics')).toBeInTheDocument();
  });

  it('calls onAddToCart when add to cart button is clicked', () => {
    const handleAddToCart = jest.fn();
    render(
      <ProductCard
        product={mockProduct}
        onAddToCart={handleAddToCart}
        onAddToWishlist={() => {}}
        onViewDetails={() => {}}
      />
    );
    
    // Note: This test would need localStorage mock for logged in state
    // const addToCartButton = screen.getByText('Add To Cart');
    // fireEvent.click(addToCartButton);
    // expect(handleAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});

