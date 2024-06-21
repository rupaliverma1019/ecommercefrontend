



import React, { useEffect, useState } from 'react';
import SummaryApi from '../Common/Url';
import "../App.css";
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.categoryProduct.url);
        const dataResponse = await response.json();
        setLoading(false);
        setCategoryProduct(dataResponse.data);
    };

    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    return (
        <div className='container mx-auto p-4'>
            <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
                {
                    loading ? (
                        
                            categoryLoading.map((el,index)=>{
                                return (
                                    <div className='h-16 w-16 md:w-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading" + index}></div>
                                )
                            })
                        
                        
                        // 
                    ):(
                        categoryProduct.map((product, index) => (
                            <Link to={`/product-category/${product?.category}`} key={product.id || index} className='p-2 cursor-pointer' key={product?.category}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-3 bg-white flex items-center justify-center'>
                                    <img src={product.productImage[0]} alt={product?.category} className='h-full object-fill hover:scale-105 transition-all'></img>
                                </div>
                                <p className='text-center text-sm md:text-base uppercase'>
                                    {product?.category}
                                </p>
                            </Link>
                        ))
                    )
                }
                
            </div>
        </div>
    );
};

export default CategoryList;





