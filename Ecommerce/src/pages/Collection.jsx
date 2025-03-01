import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState('relevant');

  // Toggle category selection
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    // console.log(value)
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
  
    );
  };

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Apply filters and sorting
  useEffect(() => {
    let updatedProducts = products;

    // Apply category filter
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        category.includes(product.category)
      );
    }
    // Apply Sub category filter
    if (subCategory.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }


    // Apply search filter
    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
      );
    }

    // Apply sorting
    if (sortType === 'low-high') {
      updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
    }
    // console.log(updatedProducts)
    setFilteredProducts(updatedProducts);
  }, [category, searchQuery, sortType, products,subCategory]);

  return (
    <div className='flex flex-col sm:flex-row gap-4 pt-10 border-t'>
      {/* Filter Sidebar */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTER
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          />
        </p>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label>
              <input type="checkbox" className='w-3' value="Men" onChange={toggleCategory} /> Men
            </label>
            <label>
              <input type="checkbox" className='w-3' value="Women" onChange={toggleCategory} /> Women
            </label>
            <label>
              <input type="checkbox" className='w-3' value="Kids" onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* Search Input */}
        <div className="border border-gray-300 pl-5 py-3 my-5">
          <p className='mb-3 text-sm font-medium'>SEARCH</p>
          <input
            type="text"
            className='w-full px-2 py-1 border border-gray-400'
            placeholder='Search products...'
            onChange={handleSearch}
          />
        </div>

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label>
              <input type="checkbox" className='w-3' value="Topwear" onChange={toggleSubCategory} /> Topwear
            </label>
            <label>
              <input type="checkbox" className='w-3' value="Bottomwear" onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label>
              <input type="checkbox" className='w-3' value="Winterwear" onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title t1={'ALL'} t2={'COLLECTIONS'} />

          {/* Sorting Dropdown */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Display Filtered Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
