import MenuItems from "./components/MenuItem"
import { menuItems } from "./data/db"
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import useOrder from "./hooks/useOrder";

function App() {
  const { 
    order,
    addItem,
    placeOrder,
    removeItem,
    tip,
    setTip} = useOrder()
  

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className='p-5'>
          <h2 className='font-black text-4xl'>Menú</h2>
          {
            menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem} />

            ))
          }

          <div className='mt-10 space-y-3'>

          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents
                order={order}
                removeItem={removeItem}
              />
              <TipPercentageForm
                tip={tip}
                setTip={setTip}
              />
              <OrderTotals
                order={order}
                tip={tip}
              placeOrder={placeOrder}
              />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}


        </div>
      </main>

    </>
  )
}

export default App
