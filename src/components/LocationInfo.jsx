

const LocationInfo = ({location}) => {
    return (
        <article>
            <h2>{location?.name}</h2>
            <ul>
                <li>
                    <span>type</span>
                    <span>{location?.type}</span>
                </li>
                <li>
                    <span>Dimension</span>
                    <span>{location?.dimension}</span>
                </li>
                <li>
                    <span>population</span>
                    <span>{location?.residents.length}</span>
                </li>

                
            </ul>
        </article>
    )
};


export default LocationInfo; 