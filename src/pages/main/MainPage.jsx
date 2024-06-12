import React from 'react'
import ProductsTableUser from '../../components/products/userView/ProductsTableUser'
import ProductsCategoryDropdown from '../../components/products/userView/ProductsCategoryDropdown'

const MainPage = () => {
    return (
        <>
            <div className='bodyAdminPage m-0 py-5'>
                <ProductsCategoryDropdown />
                <ProductsTableUser />
            </div>
        </>
    )
};

export default MainPage;