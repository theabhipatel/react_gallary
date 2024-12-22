import { ChangeEvent, FormEvent, useState } from "react";

interface IFormField {
  name: string;
  age: string;
  email: string;
}

const DynamicFrom = () => {
  const [formFields, setFormFields] = useState<IFormField[]>([
    { name: "", age: "", email: "" },
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setFormFields((formFields) => {
      const updatedFields = [...formFields];
      updatedFields[index][e.target.name as keyof IFormField] = e.target.value;

      return updatedFields;
    });
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("data --->", formFields);
    alert("Form Submitted");
  };

  const handleAddMoreField = () => {
    setFormFields((formFields) => [
      ...formFields,
      { name: "", age: "", email: "" },
    ]);
  };

  const handleRemoveField = (index: number) => {
    if (formFields.length > 1) {
      setFormFields((formFields) =>
        formFields.filter((_, idx) => idx !== index)
      );
    }
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] md:w-[60%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-5">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2">
          Dynamic Form
        </h1>

        <form onSubmit={handleFormSubmit}>
          <div className="flex gap-2 mb-2">
            <input
              placeholder="Name"
              className="py-0.5 px-2 outline-none bg-transparent placeholder:text-black placeholder:font-semibold"
              disabled
            />
            <input
              placeholder="Age"
              className="py-0.5 px-2 outline-none bg-transparent placeholder:text-black placeholder:font-semibold"
              disabled
            />
            <input
              placeholder="Email"
              className="py-0.5 px-2 outline-none bg-transparent placeholder:text-black placeholder:font-semibold"
              disabled
            />
          </div>
          {formFields.map((field, index) => {
            return (
              <div key={index} className="grid grid-cols-12 my-2 gap-2 ">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={field.name}
                  onChange={(e) => handleChange(e, index)}
                  className="py-0.5 px-2 rounded-md outline-none border-2 border-transparent focus:border-indigo-600 col-span-4"
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={field.age}
                  onChange={(e) => handleChange(e, index)}
                  className="py-0.5 px-2 rounded-md outline-none border-2 border-transparent focus:border-indigo-600 col-span-2"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={field.email}
                  onChange={(e) => handleChange(e, index)}
                  className="py-0.5 px-2 rounded-md outline-none border-2 border-transparent focus:border-indigo-600 col-span-4"
                />
                <div className="w-full col-span-2">
                  <button
                    type="button"
                    onClick={() => handleRemoveField(index)}
                    className="bg-red-500/90 h-8 w-10 flex justify-center items-center rounded-md text-white"
                  >
                    Del
                  </button>
                </div>
              </div>
            );
          })}

          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              onClick={handleAddMoreField}
              className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white"
            >
              Add Field
            </button>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicFrom;
