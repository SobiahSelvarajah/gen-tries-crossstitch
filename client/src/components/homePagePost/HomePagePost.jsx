import './HomePagePost.scss';
import crossStitch from '../../assets/images/cross-stitch.jpg';

export default function HomePagePost() {
  return (
    <article className='homePagePost__container'>
        <img
            className='homePagePost__image'
            src={crossStitch}
            alt='postImage' 
        />
        <section className='homePagePost__info'>
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
        </section>
        <p className='homePagePost__description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Totam reiciendis ipsum quasi, odio eum veritatis iste eveniet 
            magnam labore quas eligendi nesciunt dignissimos vel dolores 
            at. Modi praesentium blanditiis accusantium!
        </p>
    </article>
  )
}