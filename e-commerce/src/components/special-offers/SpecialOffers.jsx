import {specialOffers} from  "../../data/special-offers";
import { BsFillStopwatchFill } from "react-icons/bs";
import Offer from "./Offer";

const SpecialOffers = () => {
  return (
    <div className="special-offers">
        <h1 className="special-offer-title">Deals Of The Day
            <span className="special-offers-icon-wraper"><BsFillStopwatchFill className="stop-watch-icon"/> For 24 hrs only</span>

        </h1>
         <div className="special-offers-wrapper">
         {specialOffers.map(offer=> <Offer key={offer.id} offer={offer}/>
        )}
         </div>
       
    </div>


  )
}

export default SpecialOffers