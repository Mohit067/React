import { useState } from "react";

function Single() {

  const [options, setOptions] = useState('');
  console.log(options);

  return (
    <select value={options} onChange={e => setOptions(e.target.value)}>
      <option value="">--select--</option>
      <option value="upi">UPI</option>
      <option value="cod">COD</option>
      <option value="card">Card</option>
    </select>
  );
}

export default Single;
