import starIcon from '../images/icon-star.svg';
import './index.css'

function App() {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <main className="flex h-[100vh] w-[100vw] bg-dark-blue p-4">
      <div className="flex flex-col justify-between w-[400px] h-[400px] m-auto p-8 bg-blue rounded-3xl">
        <div className="flex w-12 h-12 bg-medium-grey bg-opacity-20 rounded-full">
          <img src={starIcon} alt="star icon" className="m-auto" />
        </div>
        <h1 className="font-overpass font-bold text-white text-[28px]">How did we do?</h1>
        <p className="font-overpass text-[15px] text-light-grey">Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!</p>
        <div className="flex justify-between">
          {ratings.map(rating => (
            <button key={rating} className="font-overpass text-light-grey w-12 h-12 bg-medium-grey bg-opacity-20 rounded-full">
              {rating}
            </button>
          ))}
        </div>
        <button className="font-overpass font-bold text-white bg-orange p-3 rounded-full">SUBMIT</button>
      </div>
    </main>
  )
}

export default App
