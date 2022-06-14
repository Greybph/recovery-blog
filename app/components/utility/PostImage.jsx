function PostImage({image, by, alt, posted, updated = null}) {
  return (
    <div className="-mt-4 lg:-mt-8">
      <p className="text-sm font-medium not-prose lg:text-lg">
        {`Posted ${posted}`}
        {updated && ` ~ Updated ${updated}`}
      </p>
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