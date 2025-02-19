import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  // it is method for dispatch
  const dispatch = useDispatch();
  const inputElenment = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDcrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY" });
  };

  const handlleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElenment.current.value,
      },
    });
    inputElenment.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElenment.current.value,
      },
    });
    inputElenment.current.value = "";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDcrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center containerlower">
        <input
          type="text"
          ref={inputElenment}
        />
        <button
          type="button"
          className="btn btn-info"
          onClick={handlleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
