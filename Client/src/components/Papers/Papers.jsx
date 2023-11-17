import React, { useState } from "react";
import styled from 'styled-components';
import './papers.css';
import img from '../../assets/imp.jpg'

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
        
        input, textarea {
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
        button {
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 6px;
          padding: .35rem;
        }
        .input {
          border-color: #fff;
          padding: .1rem;
          border-radius: 0px;
          border: solid #fff;
        }
      }
    }
  }
`;


const Papers = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (e) => {
       setSelectedFile(e.target.files[0]);
    };
 
    const handleUpload = async () => {
       if (!selectedFile) {
          alert("Please first select a file");
          return;
       }
 
       const formData = new FormData();
       formData.append("file", selectedFile);
 
       try {
          // Replace this URL with your server-side endpoint for handling file uploads
          const response = await fetch("", {
             method: "POST",
             body: formData
          });
 
          if (response.ok) {
             alert("File upload is  successfully");
          } else {
             alert("Failed to upload the file due to errors");
          }
       } catch (error) {
          console.error("Error while uploading the file:", error);
          alert("Error occurred while uploading the file");
       }
    };

  return (
    <section className='contact section' id='about'>
      <div className='secContainer'>
        <Wrapper id='contact'>
          <h2 className='common-heading'>Paper Submission</h2>
          <div className='mainContent container grid'>
            <div className=''>
              <img src={img} 
              style={{objectFit: 'cover',overflow:'hidden', borderRadius: "15%", height: "80vh" }}
              />
            </div>
            <div data-aos='fade-left' data-aos-duration='2500' className='singleItem'>
              <div className='container'>
                <div className='contact-form'>
                  <form action='' method='POST' className='contact-inputs'>
                    <input
                      type='text'
                      name='title'
                      placeholder='Title Name'
                      autoComplete='off'
                      required
                    />
                    <input
                      type='text'
                      name='author'
                      placeholder='Author name'
                      autoComplete='off'
                      required
                    />
                    <textarea
                      name='message'
                      cols='30'
                      rows='6'
                      placeholder='Description'
                      autoComplete='off'
                      required
                    ></textarea>
                    <div style={{display: "flex"}}> 
                    <input type="file" className="input" onChange={handleFileChange} />
                    <button onClick={handleUpload}>Upload</button>
                    </div>
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

export default Papers;
