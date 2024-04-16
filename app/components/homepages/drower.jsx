'use client'
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';


const MyDrower = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className=' md:hidden'>
      <Button type="primary" onClick={showDrawer}><MenuUnfoldOutlined /></Button>

      <Drawer title="KARO ABHAYAAS"  onClose={onClose} open={open} placement='left'>
        <p className='text-black text-xl font-bold'>JOIN US</p>
        <p className='text-black text-xl font-bold mt-3'>Classes</p>
        <p className='text-black text-xl font-bold mt-3'>Products</p>
        <p className='text-black text-xl font-bold mt-3'>About Us</p>
      </Drawer>
    </div>
  );
};
export default MyDrower;