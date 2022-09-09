import './HomePagePost.scss';
import crossStitch from '../../assets/cross-stitch.jpg';

export default function HomePagePost() {
  return (
    <section className='homePagePost__container'>
        <img
            className='homePagePost__image'
            src={crossStitch}
            alt='postImage' 
        />
        <div className='homePagePost__info'>
            <div className='homePagePost__categories'>
                <span className='homePagePost__category'>
                    Plants
                </span>
                <span className='homePagePost__category'>
                    Challenge
                </span>
            </div>
            <span className='homePagePost__heading'>
                Kittens
            </span>
            <hr></hr>
            <span className='homePagePost__date'>
                2 hours ago
            </span>
        </div>
        <p className='homePagePost__description'>
            Starting a brand new day one stitch at a time.nhjdhksjsk fjhdfjskb sjhjkdf fskhfsjfd fjdhfkjs 
            fdsjkhfjs fjkhdsj fsjhnfkjs jhsdkjf fkjsk fljkvj fkdjls asljnc jhfkdjf 
            fsdkfjhsdkfsjd fkjkjfh sjkf fkjnf df sdf g h gd fs jhfkdjfnfjjd fdjkhgjkdf gjhdfn
            ldjfgkfdh fdjhkdj jkdfj jkdgjkfd khkjssds fksjdhks ffjsk 
        </p>
    </section>
  )
}