function PostImage({
  image,
  by,
  alt,
  posted = null,
  updated = null,
  lazy
}) {
  return (
    <div className={posted ? '-mt-4 lg:-mt-10' : ''}>
      <p className="text-sm font-medium not-prose lg:text-lg">
        {posted && `Posted ${posted}`}
        {updated && ` ~ Updated ${updated}`}
      </p>      
   
      <img 
        loading={lazy ? "lazy" : "eager"}
        id="post-image"
        title={by} 
        src={image} 
        alt={alt}
        className="object-cover w-full aspect-auto"
      />
    </div>
  )
}

export default PostImage