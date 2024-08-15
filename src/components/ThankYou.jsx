import thanksIcon from "../../images/illustration-thank-you.svg";

export default function ThankYou({ feedback }) {
  return (
    <div className="flex flex-col justify-between items-center max-w-[400px] h-[400px] m-auto px-8 py-10 bg-blue rounded-3xl">
      <div>
        <img src={thanksIcon} alt="Thank-you illustration" className="m-auto" />
      </div>
      <div className="px-4 py-2 my-4 bg-medium-grey bg-opacity-20 rounded-full">
        <p className="font-overpass text-[15px] text-center text-orange">You selected {feedback} out of 5</p>
      </div>
      <h1 className="font-overpass font-bold text-white text-[28px]">Thank you!</h1>
      <p className="font-overpass text-[15px] text-center text-light-grey">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}