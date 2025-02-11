import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <div className='w-full'>
      <Header />
      <section className="flex">
        <Sidebar />
      </section>
      
    </div>
  )
}

export default App