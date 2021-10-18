import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../AdminForm/Form.css';
import Form2Signup from './Form2Signup';
import Form2Success from './Form2Success';
import Video1 from '../AdminForm/library.mp4'

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <div>
      <div className='form-container'>
      <Link to='/AdminLogin' className='back-btn'>
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
          <Form2Signup submitForm={submitForm} />
        ) : (
          <Form2Success/>
        )}
      </div>
    </div>
    </>
  );
};
export default Form2;