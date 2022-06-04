function PostImage({image, by, alt}) {
  return (
    <div>
      <img 
        title={by} 
        src={image} 
        alt={alt}
        className="w-full"
      />
    </div>
  )
}

export default PostImage