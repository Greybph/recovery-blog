function PostImage({image, by, alt}) {
  return (
    <div>
      <img 
        title={by} 
        src={image} 
        alt={alt}
        className="w-full object-cover aspect-auto"
      />
    </div>
  )
}

export default PostImage