import React from 'react'
import ProductsTable from '../../components/products/ProductsTableAdmin';
import UsersTable from '../../components/usersTable/UsersTable';

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

