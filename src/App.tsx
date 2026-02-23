
import './App.css'
import KendoExpandableGrid from './component/KendoExpandableGrid'
import { ExpandCollapseProvider } from './features/KendoContext'

function App() {

  return (
    <>
      <div className='p-3'>
        <ExpandCollapseProvider>
          <KendoExpandableGrid />
        </ExpandCollapseProvider>
      </div>

    </>
  )
}

export default App
