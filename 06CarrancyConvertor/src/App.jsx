import { useState } from 'react'
import './App.css'
import { useCurrancyInfo } from './hooks/useCurrancyInfo';
import { InputBox } from './components/InputBox';

function App() {

  const [amount, setAmount] = useState(0);
  const [amoutConverted, setAmountConverted] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const currancyInfo = useCurrancyInfo(from);
  const options = Object.keys(currancyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(amoutConverted);
    setAmountConverted(amount);
  }

  const convert  = () => {
    setAmountConverted(amount * currancyInfo[to]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/premium-vector/global-currency-background_115579-405.jpg')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            currancyOptions={options}
                            onCurrancyChange={(currancy) => setAmount(amount)}
                            setCurrancy={from}
                            amount={amount}
                            onAmountChange={(currancy) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            currancyOptions={options}
                            onCurrancyChange={(currancy) => setTo(currancy)}
                            setCurrancy={to}
                            amount={amoutConverted}
                            currancyDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
