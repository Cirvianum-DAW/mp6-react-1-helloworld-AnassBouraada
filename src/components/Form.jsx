// src/components/Form.jsx
import React, { useState } from "react";


function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setWelcomeMessage(`Benvingut ${firstName} ${lastName}!`);
    // Afegim la crida a la funció setPlacesDisponibles
    props.setPlacesDisponibles(props.placesActuals - 1);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-1/2" onSubmit={handleSubmit}>
        {" "}
        <h1 className="text-3xl font-bold text-center mb-8">
          Detalls d'estudiant: {props.tipusEstudiantSelect}
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nom
          </label>
          <input
            className="w-full mb-4 p-2 rounded-lg bg-gray-200"
            type="text"
            name="fname"
            onBlur={(e) => setFirstName(e.target.value)}
          />{" "}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Cognom
          </label>
          <input
            className="w-full p-2 rounded-lg bg-gray-200"
            type="text"
            name="lname"
            onBlur={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <label className="block w-full text-4xl mb-4 p-2" id="studentMsg">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

export default Form;
