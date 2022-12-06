import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setFile(response.data.image);
    setTitle(response.data.name);
    setPreview(response.data.url);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    try {
      await axios.put(`http://localhost:5000/product/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductById();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col col-4 offset-4">
            <form onSubmit={updateProduct}>
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
                Update
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

export default EditProduct;
