export default function validateInfo2(values) {
    let errors = {};
  
    if (!values.Institutesname.trim()) {
      errors.Institutesname = "Institute' s name is required";
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
    if (!values.Administratorname.trim()) {
      errors.Administratorname = "Administrator' s name is required";
    }
  
    if (!values.Institute_email) {
      errors.Institute_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.Institute_email)) {
      errors.Institute_email = 'Email address is invalid';
    }

    if (!values.Administrator_email) {
      errors.Administrator_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.Administrator_email)) {
      errors.Administrator_email = 'Email address is invalid';
    }

    return errors;
  }
  