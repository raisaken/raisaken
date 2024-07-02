import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = (value) => {
    setCount(value);
  };

  return (
    <>
      <div className="card">
        <h2>
          {count}
        </h2>
      </div>
      <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
          Increase 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
        <button onClick={handleOpenModal}>
          Reset
        </button>
      </div>
      <Modal show={isModalOpen} onClose={handleCloseModal} onSubmit={handleModalSubmit} />
    </>
  )
}

export default App
