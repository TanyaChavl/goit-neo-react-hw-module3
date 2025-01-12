import Description from './components/Description/Description';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css'

function App() {

  return (
    <>
      <Description />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  )
}

export default App
