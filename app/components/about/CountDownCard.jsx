function CountDownCard({time, label}) {
  return (
    <div className="flex items-center countdown-card">
      <div className='relative flex flex-col items-center justify-center'>
        <div className="flex items-center justify-center w-12 p-2 border-b rounded-md shadow md:border-b-2 lg:border-b-4 md:p-6 md:w-32 lg:p-8 lg:w-40 bg-gradient-to-b from-slate-400 to-slate-700 border-slate-400">
          <span className='block mx-auto font-bold tracking-wide text-center md:text-7xl'>{time}</span>
        </div>
          <span className='mt-2 text-xs font-medium md:text-xl lg:mt-4'>{label}</span>
        </div>
    </div>
  )
}

export default CountDownCard