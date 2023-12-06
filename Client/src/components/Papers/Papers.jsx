import React, { useState } from "react";
import styled from 'styled-components';
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
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!selectedFile || !title || !author || !description) {
      alert("Please fill in all fields and select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", title);
    formData.append("author", author);
    formData.append("description", description);

    try {
      const response = await fetch("http://localhost:9000/api/submit-paper", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully");
        setTitle('');
        setAuthor('');
        setDescription('');
        setSelectedFile(null);
      } else {
        alert("Failed to upload the file");
      }
    } catch (error) {
      console.error("Error occurred while uploading the file:", error);
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
                style={{objectFit: 'cover', overflow:'hidden', borderRadius: "15%", height: "80vh" }}
              />
            </div>
            <div className='singleItem'>
              <div className='container'>
                <div className='contact-form'>
                  <form className='contact-inputs' onSubmit={handleUpload}>
                    <input
                      type='text'
                      name='title'
                      placeholder='Title Name'
                      autoComplete='off'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <input
                      type='text'
                      name='author'
                      placeholder='Author name'
                      autoComplete='off'
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                    />
                    <textarea
                      name='message'
                      cols='30'
                      rows='6'
                      placeholder='Description'
                      autoComplete='off'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                    <div style={{display: "flex"}}> 
                      <input type="file" className="input" onChange={handleFileChange} />
                      <button type="submit">Upload</button>
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
