import './MapPage.scss';

import privacyIcon from '../../assets/images/privacy-icon.svg';
import map from '../../assets/images/choropleth_map.png';

function MapPage() {
    
        return (
            <main className="map">
                <section className="map-hero">
                    <img className="map-hero__privacy-icon" src={privacyIcon} alt="Privacy Icon" />
                    <h2 className="map-hero__title">Insert Header Here</h2>
                    <img className="map-hero__img" src={map} alt="Map"/>
                    <p className="map-hero__text">With Google Insight, you can dive deeper to learn how your location data is being used to help create a more predictive future. With the map visualizer, Google aims to educate users and provide more insight into where this data comes from.</p>
                </section>
            </main>
        )
}

export default MapPage;