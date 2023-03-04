function Button({ value, event }) {
  return (
    <>
      <button className="btn" onClick={event}>
        {value}
      </button>
    </>
  );
}

export default Button;
