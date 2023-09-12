import { useSelector } from "react-redux"
export default function FruityCart() {
  const fruitsCart = useSelector(state => state.fruitsCart)
 
  return (
    <div className="bg-slate-100 rounded">
        <p className="text-1xl p-5 border-b border-slate-400">
            Your Fruity Cart
        </p>
        <ul>
            {fruitsCart.cart.length > 0 && 
            fruitsCart.cart.map(fruit => {
                 return <li 
                 className="px-5 py-2 text-xl"
                 key={fruit.id}>
                 <span className="font-semibold mr-2">{fruit.quantity}</span>
                 <span>{fruit.name}</span>
                 </li>
            })
            }
            {fruitsCart.cart.length === 0 &&(
                <li className="px-5 py-2 text-xl font-semibold">
                    ... Grab some fruits
                </li>
            )}
        </ul>
        <p className="text-xl p-5 border-t border-slate-400">
            Total price : {fruitsCart.cart.length > 0 &&(
              <span
              className="font-semibold ml-2">
              {fruitsCart.cart.reduce((acc, fruit) => acc + fruit.quantity * fruit.price, 0)}</span>
            ) }$
        </p>
        
    </div>
  )
}