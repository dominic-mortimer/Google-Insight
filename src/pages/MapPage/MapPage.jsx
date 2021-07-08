import './MapPage.scss';

import mapIcon from '../../assets/images/map-icon.svg';
import mapGif from '../../assets/images/View-My-Map.gif';
import mapsDetails from '../../assets/images/maps-details.png';

function MapPage() {
    
        return (
            <main className="map">
                <section className="map-hero">
                    <img className="map-hero__map-icon" src={mapIcon} alt="Privacy Icon" />
                    <h2 className="map-hero__title">See how your data provides insight to all drivers in New York City</h2>
                    <img className="map-hero__img" src={mapGif} alt="Map"/>
                    <h3 className="map-hero__subtitle">Average trip duration by zones in New York City</h3>
                    <p className="map-hero__text">For drivers of all kind, New York City can be a hassle to navigate through especially when travelling between neighbourhoods. Using taxi data, Google Insight is able to provide a visualization into the average trip duration within a given zone in - this allows drivers to understand what zones are congested versus which are easier to drive through.</p>
                </section>
                <section className="maps-details">
                    <img className="maps-details__img" src={mapsDetails} alt="Maps Details Section" />
                </section>
            </main>
        )
}

export default MapPage;