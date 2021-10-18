import React from 'react';
import validate from '../AdminForm/validateInfo';
import useForm from './useFormLibrarian';
import '../AdminForm/Form.css';

const FormLibrarianSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className="text-white mb-8">
          Librarian 's Login
        </h1>
        <h1 className="h1-mobile">
          Librarian 's Login
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your full name'
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        Login
        </button>
        <span className="text-red-500 text-sm font-semibold absolute bottom-5 right-0 hover:text-LMS-200 ">
        {/*eslint-disable-next-line*/}
          <a href='#'>
          Forget Password?
          </a>
        </span>
        <span className='form-input-login'>
          Don't have an account? <strong>Contact Administrator</strong>.
        </span>
      </form>
    </div>
  );
};

export default FormLibrarianSignup;