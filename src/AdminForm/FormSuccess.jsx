import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <div className="w-full h-full">
      <img className='form-img-2' src='https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80' 
      alt='success' />
      </div>
    </div>
  );
};

export default FormSuccess;