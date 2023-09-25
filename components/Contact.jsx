import React from 'react';

const Contact = () => {
  return (
    <div className='max-w-[1400px] h-screen p-6 md:p-16 mx-auto'>
      <h1 className='text-center text-2xl md:text-3xl font-mooli'>Let's work together</h1>
      <form className='max-w-[600px] my-[50px] mx-auto grid grid-cols-1 gap-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <input type='text' placeholder='Name' className='border shadow-lg p-3 rounded-[5px] outline-none' />
          <input type='email' placeholder='Email' className='border shadow-lg p-3 rounded-[5px] outline-none' />
        </div>
        <input type='text' placeholder='Subject' className='border shadow-lg p-3 rounded-[5px] outline-none' />
        <textarea placeholder='Message...' cols='30' rows='10' className='border shadow-lg rounded-[5px] resize-none outline-none p-3'></textarea>
        <button className='border shadow-lg p-3 rounded-[5px] mt-1'>Sumbit</button>
      </form>
    </div>
  );
};

export default Contact;