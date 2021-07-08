import './MapPage.scss';

import privacyIcon from '../../assets/images/privacy-icon.svg';
import map from '../../assets/images/choropleth_map.png';
import durationmap from "../../assets/images/below-gif-images.png"

function MapPage() {
    
        return (
            <main className="map">
                <section className="map-hero">
                    <img className="map-hero__privacy-icon" src={privacyIcon} alt="Privacy Icon" />
                    <h2 className="map-hero__title">See how your data provides insight to all drivers in New Tork City</h2>
                    <img className="map-hero__img" src={map} alt="Map"/>
                    <p className="map-hero__text">With Google Insight, you can dive deeper to learn how your location data is being used to help create a more predictive future. With the map visualizer, Google aims to educate users and provide more insight into where this data comes from.</p>
                </section>

                <section className="durationmap">
                {/* <h2>Average trip duration by zones in New York City</h2> */}
                {/* <p>For drivers of all kind. New York City can be a hassle to navigate through especially when travelling between neighbourhoods. Using taxi data, Google Insight is able to provide a visualization into the average trip duration within a given zone in - this allows drivers to understand what zones are congested versus which are easier to drive through.</p> */}
                <img className="durationmap__style"src={durationmap}/>
                </section>
            </main>
        )
}

export default MapPage;