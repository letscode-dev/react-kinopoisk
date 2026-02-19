const ReduxSample = () => {
  const count = 1;

  return (
    <div>
      <button onClick={() => null}>+</button>
      <button onClick={() => null}>-</button>
      <button onClick={() => null}>+23</button>

      <span>{count}</span>
    </div>
  );
};

export default ReduxSample;
