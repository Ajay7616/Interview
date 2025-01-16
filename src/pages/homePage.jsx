import React from 'react';
import Sidebar from '../component/navbar/Sidebar.jsx';
import Listing from '../component/content-listing/Listing.jsx'

const homePage = () => {
  return (
    <div>
        <Sidebar />
        <Listing />
    </div>
  )
}

export default homePage;