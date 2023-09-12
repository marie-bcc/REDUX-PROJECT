import { useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../../features/counter"


export default function CounterBtn() {
    const dispatch = useDispatch()
  return (
    <div>
        <p className="text-slate-50 mb-2">Modify counter value </p>
        <button 
        onClick={() => dispatch(increment())}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2">+1</button>
        <button 
        onClick={() => dispatch(decrement())}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2">-1</button>
        <button 
        onClick={() => dispatch(incrementByAmount(10))}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2">+10</button>
      
    </div>
  )
}