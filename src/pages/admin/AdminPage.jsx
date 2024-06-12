import React from 'react'
import ProductsTable from '../../components/products/adminView/ProductsTableAdmin';
import UsersTable from '../../components/users/adminView/UsersTable';

export const AdminPage = () => {
  return (
    <>
      <div className='bodyAdminPage m-0 py-5'>
        <ProductsTable />
        <UsersTable />
      </div>
    </>
  )
};

