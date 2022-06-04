function Tooltip({word, tooltip}) {
  return (
    <span className="italic font-medium group font-mont cursor-help">
      <span className="absolute invisible block p-4 -mt-16 text-sm not-italic font-normal text-white rounded-md shadow-md md:p-4 md:-m-12 lg:-mt-12 group-hover:visible lg:inline group-hover:z-50 bg-slate-900">
        {tooltip}
      </span>
      {word}
    </span>
  )
}

export default Tooltip