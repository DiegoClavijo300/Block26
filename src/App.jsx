import ContactList from './components/ContactList.jsx'
import './App.css'
import SelectedContact from "./components/SelectedContact";
import { useState } from 'react';

export function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
      <SelectedContact setSelectedContactId={setSelectedContactId} selectedContactId={selectedContactId}/>
    ) : (
    <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  );
}

export default App
