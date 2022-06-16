import {FaFacebookSquare} from 'react-icons/fa'

function PostImage({image, by, alt, posted = null, updated = null}) {
  return (
    <div className={posted ? '-mt-4 lg:-mt-10' : ''}>
      
      <p className="text-sm font-medium not-prose lg:text-lg">
        {posted && `Posted ${posted}`}
        {updated && ` ~ Updated ${updated}`}
      </p>

      {/* <div className="w-fit" data-href="https://www.recoveryocean.com/blog/3-lies-addicts-tell-themselves" data-layout="button" data-size="large">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.recoveryocean.com%2Fblog%2F3-lies-addicts-tell-themselves&amp;src=sdkpreparse" rel="noreferrer" className="fb-xfbml-parse-ignore">
          <FaFacebookSquare className="text-3xl" />
        </a>
      </div> */}

      <img 
        title={by} 
        src={image} 
        alt={alt}
        className="object-cover w-full aspect-auto"
      />
    </div>
  )
}

export default PostImage