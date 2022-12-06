import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.post(`http://localhost:5000/product`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-4 offset-4">
            <form onSubmit={saveProduct}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  onChange={loadImage}
                  type="file"
                  className="form-control"
                  id="image"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
            <div className="mt-3">
              {preview ? (
                <img
                  src={preview}
                  className="img-thumbnail"
                  alt="Preview Image"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
