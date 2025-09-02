import { useRef } from "react";
const Register = () => {
  const inputRef = useRef(null);

  const printValue = (event) => {
    console.log(inputRef.current?.value);
    inputRef.current.value = event.target.value;
  };

  return (
    <div>
      <input ref={inputRef} type="text" onChange={printValue} />
      <button>Print</button>
    </div>
  );
};

export default Register;
