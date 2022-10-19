import { Link } from 'react-router-dom';
import crossStitch from '../../assets/images/cross-stitch.jpg';
import './HomePagePost.scss';

const HomePagePost = ({post}) => {
  return (
    <Link to={`/post/${post._id}`} style={{textDecoration:'none'}}>
        <article className='homePagePost__container'>
            {/* {post.postImage && ( */}
                <img
                    className='homePagePost__postImage'
                    src={crossStitch}
                    alt='postImage' 
                />
            {/* )} */}
            <section className='homePagePost__info'>
                <div className='homePagePost__categories'>
                    {post.categories.map((category) => (
                        <h5 className='homePagePost__category'>
                            {category.name}
                        </h5>                    
                    ))}
                </div>
                <h2 className='homePagePost__postTitle'>
                    {post.postTitle}
                </h2>
                <hr></hr>
                <h5 className='homePagePost__timestamps'>
                    {new Date(post.createdAt).toDateString()}
                </h5>
            </section>
            <p className='homePagePost__description'>
                {post.description}
            </p>
        </article>
    </Link>
  )
}

export default HomePagePost;