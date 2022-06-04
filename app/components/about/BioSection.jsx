import AddictionBio from './AddictionBio'

function BioSection() {
  return (
    <section className="px-4 py-16 md:-mb-40 md:py-32 md:px-10 lg:px-28 xl:px-32 font-mont ">
      <span className="block text-2xl font-bold text-center md:text-4xl lg:text-5xl">Bio</span>

      <div className="flex mt-4 space-x-20 md:mt-10">
        <AddictionBio />
      </div>
    </section>
  )
}

export default BioSection