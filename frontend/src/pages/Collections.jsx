import React, { useContext, useEffect, useState } from 'react';
import { MdArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { GiftContext } from '../context/GiftContext';
import ProductItem from '../components/Home/ProductItem/ProductItem';

const Collections = () => {
  const { products } = useContext(GiftContext);
  const [collections, setCollections] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortType, setSortType] = useState('');
  const [category, setCategory] = useState([]);



  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
      if (e.target.value === 'all') {
        setCategory([])
      }
    }
  }

  const ApplyFilter = () => {
    let filtered = products.slice()
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category))
    }
    setCollections(filtered)
  }

  useEffect(() => {
    ApplyFilter()
  }, [category, products])


  const itemPage = 8;

  // Calculate total pages correctly
  const totalPages = Math.ceil(collections.length / itemPage);

  // Pagination logic fix
  const start = (currentPage - 1) * itemPage;
  const end = start + itemPage;
  const currentItems = collections.slice(start, end);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    if (products?.length > 0) {
      setCollections(products);
    }
  }, [products]);


  useEffect(() => {
    sortProducts()
  }, [sortType])



  const sortProducts = () => {
    let filterSortProducts = collections.slice()
    switch (sortType) {
      case 'low-high':
        setCollections(filterSortProducts.sort((a, b) => a.price - b.price))
        break;
      case 'high-low':
        setCollections(filterSortProducts.sort((a, b) => b.price - a.price))
        break;
      default:
        ApplyFilter()
        break;
    }

  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">

        {/* LEFT SIDEBAR */}
        <div className="min-w-60 md:px-8 px-5 border-r border-gray-300 h-auto">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="font-bold mt-5 cursor-pointer"
          >
            FILTER BY CATEGORY
            {showFilter ? (
              <MdOutlineArrowDropDown size={30} className="inline-block sm:hidden" />
            ) : (
              <MdArrowDropUp size={30} className="inline-block sm:hidden" />
            )}
          </p>

          <div className={`sm:block ${showFilter ? "block" : "hidden"}`}>
            <div className="flex flex-col gap-5 mt-5">
              {["HomeDecor", "Paintings", "Kitchen & dining", "Gifts", "Accessories"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input className="w-5" type="checkbox" value={item} onChange={toggleCategory} />
                  <span className="text-sm capitalize text-red-400">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          {/* SORT */}
          <div className="flex justify-end px-5 mt-5">
            <select onChange={(e) => setSortType(e.target.value)} className="border border-gray-300 p-2 rounded-lg uppercase focus:outline-none">
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* PRODUCT GRID — USE PAGINATED DATA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2">
            {currentItems.map((item, index) => (
              <ProductItem
                key={item.id || index}
                id={item.id}
                name={item.name}
                images={item.images}
                price={item.price}
              />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center items-center mt-5 mb-5 gap-3">

            <button
              onClick={() => goToPage(currentPage - 1)}
              className="px-3 py-1 bg-gray-200 rounded  cursor-pointer"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 rounded-full mx-1 cursor-pointer ${currentPage === index + 1
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-gray-600"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 rounded cursor-pointer"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
            {currentPage}/{totalPages}

          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
