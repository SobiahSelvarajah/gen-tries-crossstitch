import './HomePagePost.scss';

export default function HomePagePost() {
  return (
    <section className='homePagePost__container'>
        <img
            className='homePagePost__image'
            src=''
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
            <h2 className='homePagePost__heading'>
                Kittens
            </h2>
            <hr></hr>
            <span className='homePagePost__date'>
                2 hours ago
            </span>
        </div>
    </section>
  )
}
