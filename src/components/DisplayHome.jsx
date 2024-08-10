import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import { albumsData } from "../assets/assets"

const DisplayHome = () => {
  return (
  <>
    <Navbar/>
    <div className="my-5 font-bold text-2xl">
       {
        albumsData.map((item,index)=>(
            <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />

        ))
       }
    </div>
  </>
  )
}

export default DisplayHome