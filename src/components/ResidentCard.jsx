import { useEffect } from "react"
import useFetch from "../assets/useFetch"
import './styles/ResidentCard.css'


const ResidentCard = ({url}) => {
    const [resident, getResidenr] = useFetch(url)
    useEffect(() => {
        getResidenr()

    }, [])
    console.log(resident);
    return(
    <article className="resident">
        <header className="resident_header">
            <img src={resident?.image} alt="" />
            <div>
                <div className={`resident__status__circle ${resident?.status}`}></div>

                <div className='resident__status'>{resident?.status}</div>
                
            </div>
        </header>
        <section>
            <h3>{resident?.name}</h3>
            <hr />
            <ul>
                <li>
                    <span>specie</span>
                    <span>{resident?.species}</span>
                    </li>

                    <li>
                     <span>Origin</span>
                     <span>{resident?.origin.name}</span>
                     </li> 
                     <li>
                        <span>eppisodes</span>
                        <span>{resident?.episode.length}</span>
                    </li>
            </ul>
        </section>
    </article>
    );
  
};

export default ResidentCard;