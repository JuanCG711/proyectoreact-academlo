import Locationinfo from "./locationInfo"
import ResidentCard from "./residentCard"
import './styles/mainContent.css'

const MainContent = ({ location }) => {
  return (
    <>
    <Locationinfo location = {location}/>
      <div className="main_content">
        {
          location?.residents.map(url => (
            <ResidentCard 
              key = {url}
              url = {url}
            />
          ))
        }
      </div>
    </>
  )
}

export default MainContent