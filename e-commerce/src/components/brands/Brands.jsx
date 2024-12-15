
import { brands } from "../../data/brands"
const Brands = () => {
  return (
    <div className="brands-wrapper">
        {brands.map(brand=>
           <div className="brand" key={brand.id}>
            <img src={brand.image} className="brand-image" alt="" />
           </div> 
        )}
    </div>
  )
}

export default Brands