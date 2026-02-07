// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [value, setValue] = useState("");
  const [curA, setCurA] = useState("USD");
  const [curB, setCurB] = useState("USD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      if (!value) return;

      if (curA === curB) {
        setOutput(value);
        return;
      }

      async function fetchData() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${curA}&to=${curB}`,
        );
        setIsLoading(true);
        const data = await res.json();
        setOutput(data.rates[curB]);
        setIsLoading(false);
      }
      fetchData();
    },
    [value, curA, curB],
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={curA}
        onChange={(e) => setCurA(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={curB}
        onChange={(e) => setCurB(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{isLoading ? "fetching data" : output}</p>
    </div>
  );
}
