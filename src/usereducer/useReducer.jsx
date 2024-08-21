import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "DELETE_PERSON") {
    const newpersons = state.data.filter((eachPerson) => {
      return eachPerson.id !== action.payload;
    });
    return {
      ...state,
      data: newpersons,
      length: state.length - 1,
    };
  }
};

const Index = () => {
  const intialstate = {
    data: [
      { id: "svnkdndskvdsb", firstname: "vinod", lastname: "ambarapu" },
      { id: "sdnjfbsadmf", firstname: "vinitha", lastname: "ambarapu" },
    ],
    length: 2,
  };

  const [state, dispatch] = useReducer(reducer, intialstate);
  const handledelete = (id) => {
    dispatch({
      type: "DELETE_PERSON",
      payload: id,
    });
  };
  const handledit = (id) => {
    dispatch({
      type: "Update_PERSON",
      payload: id,
    });
  };

  return (
    <div>
      <h1>length:{state.length}</h1>
      {state.data.map((eachObj) => {
        const { id, firstname, lastname } = eachObj;
        return (
          <div key={id}>
            <h1>{firstname}</h1>
            <h1>{lastname}</h1>
            <button onClick={() => handledit(id)}>update</button>
            <button onClick={() => handledelete(id)}>delete</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default Index;
