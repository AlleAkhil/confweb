import React, { useState } from 'react';
import styled from 'styled-components';
import './contact.css';

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;

.container {
  margin-top: 6rem;
  text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      
      input, textarea{
        border-radius: 6px;
        padding:.75rem;
        border-color: #39552a;
        border: 3px solid #39552a;
      }
      input:focus, textarea:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        border: 4px solid #b96a6b;
      }
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 6px;
      }
    }
  }
}
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:9000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Details submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields on success
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  return (
    <section className='contact section' id='about'>
      <div className='secContainer'>
        <Wrapper id='contact'>
          <h2 className='common-heading'>Contact Us</h2>
          <div className='mainContent container grid'>
            <div className='singleItem'>
              <iframe
                title='Google Maps'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243674.4095972758!2d78.01456619453124!3d17.391973500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94eba8ad7c87%3A0xb78f51ed556f7cc5!2sChaitanya%20Bharathi%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1699818906976!5m2!1sen!2sin'
                width='100%'
                height='450'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
            <div data-aos='fade-left' data-aos-duration='2500' className='singleItem'>
              <div className='container'>
                <div className='contact-form'>
                  <form action='POST' method='POST' className='contact-inputs' onSubmit={handleSubmit}>
                    <input
                      type='text'
                      name='name'
                      placeholder='Name'
                      autoComplete='off'
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <input
                      type='email'
                      name='email'
                      placeholder='Email'
                      autoComplete='off'
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name='message'
                      cols='30'
                      rows='6'
                      placeholder='Message'
                      autoComplete='off'
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <input type='submit' value='Send' name='submit' />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Contact;
