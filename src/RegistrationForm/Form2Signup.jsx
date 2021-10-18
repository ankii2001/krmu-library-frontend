import React from 'react';
import validate from './validationInfo2';
import useForm2 from './useForm2';
import '../AdminForm/Form.css'

const Form2Signup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm2(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className="h1-desktop">
        Get Yourself Register today! by filling out the information below.
        </h1>
        <p className="mt-4 text-white">
            Institute's Details
          </p>
        <h1 className="h1-mobile">
          Get Yourself Register today!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Institute' s Name</label>
          <input
            className='form-input'
            type='text'
            name='Institutesname'
            placeholder="Enter Institute's name"
            value={values.Institutesname}
            onChange={handleChange}
          />
          {errors.Institutesname && <p>{errors.Institutesname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Institute' s Email ID</label>
          <input
            className='form-input'
            type='email'
            name='Institute_email'
            placeholder="Enter Institute's email-id"
            value={values.Institute_email}
            onChange={handleChange}
          />
          {errors.Institute_email && <p>{errors.Institute_email}</p>}
        </div>
        <p className="mt-4 text-white">
            Administrator's Details
          </p>
        <div className='form-inputs'>
          <label className='form-label'>Full Name</label>
          <input
            className='form-input'
            type='text'
            name='Administratorname'
            placeholder='Enter your full name'
            value={values.Administratorname}
            onChange={handleChange}
          />
          {errors.Administratorname && <p>{errors.Administratorname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email Address</label>
          <input
            className='form-input'
            type='email'
            name='Administrator_email'
            placeholder='Enter your email-id'
            value={values.Administrator_email}
            onChange={handleChange}
          />
          {errors.Administrator_email && <p>{errors.Administrator_email}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        Register
        </button>
      </form>
    </div>
  );
};

export default Form2Signup;