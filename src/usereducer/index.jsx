import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newpersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      data: newpersons,
      length: state.length - 1,
    };
  }
  return state;
};

const Final = () => {
  const intialState = {
    data: [
      { id: "fgkjdfkb", firstname: "vinod", email: "vinodambarapu@gmail.com" },
      {
        id: "djbfdsmv",
        firstname: "rama",
        email: "ambarapuvinodyadav@gmail.com",
      },
    ],
    length: 2,
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  const handledelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  return (
    <div>
      <h1>length:{state.length}</h1>
      <hr />
      {state.data.map((eachObj) => {
        const { id, firstname, email } = eachObj;
        return (
          <div key={id}>
            <h1>{firstname}</h1>
            <p>{email}</p>
            <div>
              <button onClick={() => handledelete(id)}>delete</button>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Final;
