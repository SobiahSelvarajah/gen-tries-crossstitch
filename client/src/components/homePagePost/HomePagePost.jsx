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
                <h5 className='homePagePost__category'>
                    Plants
                </h5>
                <h5 className='homePagePost__category'>
                    Challenge
                </h5>
            </div>
            <h2 className='homePagePost__heading'>
                Kittens
            </h2>
            <hr></hr>
            <h5 className='homePagePost__date'>
                2 hours ago
            </h5>
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