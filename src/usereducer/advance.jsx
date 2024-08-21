import React, { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        usersData: action.payload,
      };
    case "UPDATE_PERSON":
      const updatedUsers = state.usersData.map((eachObj) => {
        if (eachObj.id === action.payload.id) {
          return {
            ...eachObj,
            name: action.payload.name,
            email: action.payload.email,
          };
        }
        return eachObj;
      });
      return {
        ...state,
        usersData: updatedUsers,
      };
    case "loading":
      return {
        ...state,
        loading: action.payload,
      };
    case "error":
      return {
        ...state,
        isError: action.payload,
      };
    case "DELETE_PERSON":
      const newperson = state.usersData.filter(
        (eachObj) => eachObj.id !== action.payload
      );
      return {
        ...state,
        usersData: newperson,
      };
    case "ONCLICK_UPDATE":
      return {
        ...state,
        isupdate: action.payload,
      };
    default:
      return state;
  }
};

const Advance = () => {
  const initialState = {
    usersData: [],
    loading: false,
    isError: { state: false, msg: "" },
    isupdate: { status: false, id: "", name: "", email: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchusersData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const handledelete = (id) => {
    dispatch({ type: "DELETE_PERSON", payload: id });
  };

  const updateData = (id, name, email) => {
    dispatch({ type: "UPDATE_PERSON", payload: { id, name, email } });
    dispatch({
      type: "ONCLICK_UPDATE",
      payload: { status: false, id: "", name: "", email: "" },
    });
  };

  const fetchusersData = async (URL) => {
    dispatch({ type: "loading", payload: true });
    dispatch({ type: "error", payload: { state: false, msg: "" } });
    try {
      const response = await fetch(URL);
      const data = await response.json();
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "SET_USERS", payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: "loading", payload: false });
      dispatch({ type: "error", payload: { state: true, msg: error.message } });
    }
  };

  return (
    <div>
      <h1>USERS INFORMATION</h1>
      {state.isupdate?.status && (
        <EditForm
          id={state.isupdate.id}
          comingTitle={state.isupdate.name}
          commingEmail={state.isupdate.email}
          updateData={updateData}
        />
      )}
      {state.loading && <p>Loading...</p>}
      {state.usersData.map((eachObj) => {
        const { name, email, id } = eachObj;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>{email}</p>
            <button onClick={() => handledelete(id)}>delete</button>
            <button
              onClick={() =>
                dispatch({
                  type: "ONCLICK_UPDATE",
                  payload: { status: true, id: id, name, email },
                })
              }
            >
              UPDATE
            </button>
          </div>
        );
      })}
    </div>
  );
};

const EditForm = ({ id, comingTitle, commingEmail, updateData }) => {
  const [title, setTitle] = useState(comingTitle || "");
  const [email, setEmail] = useState(commingEmail || "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateData(id, title, email);
      }}
    >
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Update data</button>
    </form>
  );
};

export default Advance;
