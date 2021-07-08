import './MainPage.scss';

import { Link } from 'react-router-dom';
import privacyIcon from '../../assets/images/privacy-icon.svg';
import exploreSection from '../../assets/images/explore.png';

function MainPage() {
    
        return (
            <main className="main">
                <section className="main-hero">
                    <img className="main-hero__privacy-icon" src={privacyIcon} alt="Privacy Icon" />
                    <h2 className="main-hero__title">Providing visual insight on your mobility and how we use this data.</h2>
                    <p className="main-hero__text">With Google Insight, you can dive deeper to learn how your location data is being used to help create a more predictive future. With the map visualizer, Google aims to educate users and provide more insight into where this data comes from.</p>
                    <Link className="main-hero__button" to="/map">See My Map</Link>
                </section>
                <section className="explore">
                    {/* <h2 className="explore__title">Explore what we do to improve your commute</h2>
                    <article className="explore__article">
                        <div className="explore__article-visual">
                            <img className="explore__img" src={destination} alt="Map" />
                        </div>
                        <div className="explore__article-info">

                        </div>
                    </article> */}
                    <img className="explore__img" src={exploreSection} alt="Explore Section" />
                </section>
            </main>
        )
}

export default MainPage;