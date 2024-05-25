import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "https://backendcsvtask.onrender.com/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(res.data);
    } catch (err) {
      console.error("Error uploading file:", err);
      if (err.response) {
        setMessage(err.response.data || "There was a problem with the server");
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input type="submit" value="Upload" />
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUpload;
