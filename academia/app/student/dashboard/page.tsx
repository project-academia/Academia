import React from 'react'
import Navbar from '../../components/navbar'
import {SidebarComponent} from '../../components/sidebar'


const items = [
  { name: "Dashboard" },
  { name: "Profile" },
  { name: "Settings" },
  { name: "Logout" },
  {name: "Courses"},
];



const StudentDashboard = () => {
    return (
      <>
      <div >
      <Navbar />
      </div>
      
      <div className='pt-16'>
    <SidebarComponent menuItems = {items}  />
    </div>
      


        
      </>
    );
  };
  
  export default StudentDashboard;
  