import { useState } from 'react';
import './App.css'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Tasks from './components/tasks/Tasks'

function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  return (
    <div className='container'>
      <Header setIsFormOpen={setIsFormOpen}/>
      {isFormOpen && <Form setIsFormOpen={setIsFormOpen}/>}
      <Tasks />
    </div>
  )
}

export default App
