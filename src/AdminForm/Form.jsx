import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import Video1 from './library.mp4';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div>
      <div className='form-container'>
      <Link to='/LoginAs' className='back-btn'>
          <div className="hover:text-LMS-100">
          <i class="fas fa-arrow-left"></i>
          </div>
        </Link>
        <Link to='/' className='close-btn'>
          <div className="hover:text-LMS-200">
          <i class="fas fa-times"></i>
          </div>
        </Link>
        <div className='form-content-left'>
          <div className='form-vid'>
          <video src={Video1} autoPlay loop muted />
          </div>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </div>
    </>
  );
};
export default Form;
