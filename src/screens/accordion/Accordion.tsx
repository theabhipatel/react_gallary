import { useState } from "react";

const Accordion = () => {
  const [accData, setAccData] = useState(accordionData);

  const handleToggleAccordion = (id: number) => {
    setAccData((data) => {
      return data.map((item) => {
        if (item.id === id) {
          item.isOpen = true;
        } else {
          item.isOpen = false;
        }
        return item;
      });
    });
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] md:w-[60%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-5">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2">
          Accordion
        </h1>

        <div>
          {accData.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-indigo-600/10 my-2 p-2 rounded-md"
              >
                <div
                  onClick={() => handleToggleAccordion(item.id)}
                  className="flex justify-between cursor-pointer"
                >
                  <h2 className="text-lg font-semibold">
                    {item.id}. {item.title}
                  </h2>
                  <div className="px-5 text-2xl leading-none font-bold ">
                    {item.isOpen ? "-" : "+"}
                  </div>
                </div>
                <div className="bg-indigo-600/5  rounded-md">
                  {item.isOpen && (
                    <p className="p-2 px-4 mt-2">{item.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

const accordionData = [
  {
    id: 1,
    title: "What is React.js?",
    description:
      "React.js is a popular JavaScript library for building user interfaces, particularly for single-page applications. It uses a component-based architecture and allows developers to create reusable UI components.",
    isOpen: true,
  },
  {
    id: 2,
    title: "What is Node.js?",
    description:
      "Node.js is a runtime environment that allows you to run JavaScript on the server-side. It is built on Chrome's V8 JavaScript engine and is commonly used for building scalable, high-performance web applications.",
    isOpen: false,
  },
  {
    id: 3,
    title: "What is TypeScript?",
    description:
      "TypeScript is a superset of JavaScript that adds static typing and other features to the language. It helps developers catch errors early during development and provides better tooling support.",
    isOpen: false,
  },
  {
    id: 4,
    title: "What is MongoDB?",
    description:
      "MongoDB is a NoSQL database that uses a document-oriented data model. It is designed to handle unstructured data and offers flexibility, scalability, and high performance for modern applications.",
    isOpen: false,
  },
  {
    id: 5,
    title: "What is Next.js?",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and other features to improve performance and SEO for web applications. It simplifies the development of full-stack React applications.",
    isOpen: false,
  },
  {
    id: 6,
    title: "What is REST API?",
    description:
      "A REST API is an architectural style for designing networked applications. It uses HTTP methods like GET, POST, PUT, and DELETE to enable communication between a client and a server.",
    isOpen: false,
  },
  {
    id: 7,
    title: "What is GraphQL?",
    description:
      "GraphQL is a query language and runtime for APIs that enables clients to request only the data they need. It provides flexibility and efficiency compared to traditional REST APIs.",
    isOpen: false,
  },
];
