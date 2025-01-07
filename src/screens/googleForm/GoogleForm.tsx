import { ChangeEvent, FormEvent, useState } from "react";

const GoogleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ⚠️ This Form will run only with backend becuase of google strict cors policy.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("result ---> ", result);
      if (result.status === "success") {
        alert("Data submitted successfully!");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data!");
    }
  };

  return (
    <div className="flex justify-center  mt-5">
      <div className="flex w-[90%] min-h-56 bg-gray-100 rounded-md items-center flex-col gap-2 p-5">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2 ">
          Google My Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-[60%] p-5 flex flex-col gap-3   border-indigo-500 border rounded-md bg-indigo-100"
        >
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none border rounded-md focus:border-indigo-500 px-3"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-8 outline-none border rounded-md focus:border-indigo-500 px-3"
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full h-20 outline-none border rounded-md focus:border-indigo-500 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 rounded-md h-8 w-20 text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoogleForm;
