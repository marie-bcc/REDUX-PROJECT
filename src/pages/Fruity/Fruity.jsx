import { useSelector, useDispatch } from "react-redux"
import FruityCart from "./FruityCart"
import { addOne, removeOne } from "../../features/fruitsCart"
export default function Fruity() {
    const fruitsList = useSelector(state => state.fruits)
    const dispatch = useDispatch()

  return (
    
    <>
        <h1 className="text-4xl text-slate-100 font-bold"> Fruity </h1>
        <p className="text-xl text-slate-200 mb-10 ">Pick yout fruits and get delivered the day 🥗</p>
        <ul className="flex gap-4 mb-4">
            {fruitsList.list.map(fruit => (
                <li key={fruit.id}
                className="bg-slate-100 rounded p-4 w-full">
                    <img className
                    ="w-full h-[250px] object-cover mb-3"
                    src={fruit.url} alt={fruit.name} />
                    <div className="flex justify-between items-baselinemb-4">
                        <h2 className="text-2xl mb-2 font-semibold">{fruit.name}</h2>
                        <p className="text-xl font-semibold">Per unit {fruit.price}$</p>
                    </div>
                    <div className="flex gap-2">
                        <button 
                        onClick={() => dispatch(addOne(fruit))}
                        className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded">Add to Cart</button>
                        <button 
                        onClick={() => dispatch(removeOne(fruit.id))}
                        className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded">Remove one</button>
                    </div>
                </li>
            ))}
        </ul>
        <FruityCart/>
    </>
  )
}