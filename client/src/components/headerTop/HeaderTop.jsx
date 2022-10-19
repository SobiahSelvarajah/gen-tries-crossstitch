import HotTopics from '../hotTopics/HotTopics';
import MainHeroImage from '../mainHeroImage/MainHeroImage';
import './HeaderTop.scss';

export default function HeaderTop() {
    return(
        <>
            <header className='headerTop__container'>
                <div className='headerTop__textContainer'>
                    <p className='headerTop__introText'>
                        Welcome to
                        <br></br>
                        Gen Tries Crossstitch
                    </p>
                </div>
                <MainHeroImage />
                <HotTopics />
            </header>
        </>
    )
}