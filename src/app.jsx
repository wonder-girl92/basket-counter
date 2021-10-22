import Counters from './components/counters'
import NavBar from './components/navBar'
import { useState } from 'react'

function App (props) {
  const initialState = [
    { value: 0, id: 1, name: 'Ложка' },
    { value: 4, id: 2, name: 'Вилка' },
    { value: 0, id: 3, name: 'Тарелка' },
    { value: 0, id: 4, name: 'Стартовый набор минималиста' },
    { value: 0, id: 5, name: 'Ненужные вещи' },
  ]
  const [counters, setCounters] = useState(initialState)
  const handleDelete = (counterId) => {
    const newCounters = counters.filter(counter => counter.id !== counterId)
    setCounters(newCounters)
  }
  const handleIncrement = (counterId) => {
    const newCounters = [...counters]
    const elementIndex = newCounters.findIndex((counter) => counter.id === counterId)
    newCounters[elementIndex].value++
    setCounters(newCounters)
  }

  const handleDecrement = (counterId) => {
    const newCounters = [...counters]
    const elementIndex = newCounters.findIndex((counter) => counter.id === counterId)
    if (newCounters[elementIndex].value > 0) newCounters[elementIndex].value--
    setCounters(newCounters)
  }

  const handleReset = () => setCounters(initialState)

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems={counters.reduce((a, c) => a + c.value, 0)}
        />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  )
}

export default App