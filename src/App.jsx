import { useState } from 'react';
import ThankYou from './components/ThankYou.jsx';
import Attrubution from "./components/Attribution.jsx";

import starIcon from '../images/icon-star.svg';
import './index.css'

function App() {
  const [feedback, setFeedback] = useState();
  const [submitted, setSubmitted] = useState(false);
  const ratings = [1, 2, 3, 4, 5];

  function handleSelect(rating) {
    setFeedback(rating);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  return (
    <main className="relative flex flex-col h-[100vh] w-[100vw] bg-dark-blue p-4">
      {!submitted ?
        <div className="flex flex-col justify-between max-w-[400px] h-[400px] m-auto p-8 bg-blue rounded-3xl">
          <div className="flex w-12 h-12 bg-medium-grey bg-opacity-20 rounded-full">
            <img src={starIcon} alt="Star icon" className="m-auto" />
          </div>
          <h1 className="font-overpass font-bold text-white text-[28px]">How did we do?</h1>
          <p className="font-overpass text-[15px] text-light-grey">Please let us know how we did with your support request. All feedback is appreciated
          to help us improve our offering!</p>
          <div className="flex justify-between">
            {ratings.map(rating => (
              <button
                key={rating}
                className="font-overpass text-light-grey w-12 h-12 bg-medium-grey bg-opacity-20 rounded-full
                  focus:text-white focus:bg-opacity-100 hover:text-white hover:bg-orange hover:bg-opacity-100"
                onClick={() => handleSelect(rating)}
              >
                {rating}
              </button>
            ))}
          </div>
          <button
            className="font-overpass font-bold text-white bg-orange hover:text-orange hover:bg-white p-3 rounded-full"
            onClick={handleSubmit}
            disabled={!feedback}
          >
            SUBMIT
          </button>
        </div>
      :
        <ThankYou feedback={feedback} />
      }
      <Attrubution />
    </main>
  )
}

export default App
