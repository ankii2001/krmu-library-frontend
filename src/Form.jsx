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
        <Link to='/' className='close-btn'>
          <div className="text-md">x</div>
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
