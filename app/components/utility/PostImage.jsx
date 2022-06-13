function PostImage({image, by, alt}) {
  return (
    <div>
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