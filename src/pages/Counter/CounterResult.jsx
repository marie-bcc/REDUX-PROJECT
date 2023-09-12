import { useSelector } from "react-redux"

export default function CounterResult() {
    const counter = useSelector(state => state.counter)
  return (
    <>
        <h1 className="text-white">Counter value: {counter.value}</h1>
    </>
  )
}