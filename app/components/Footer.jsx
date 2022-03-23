import { Link } from "remix"


function Footer() {
  return (
    <footer className="px-4 pt-14 font-mont h-1/2 md:px-10 lg:px-28 bg-slate-700">
      <div className="flex justify-between pb-16 border-b-2 border-slate-600">
        <div>
          <span className="block mb-4 text-2xl font-bold text-sky-600">LOGO</span>
          <p className="max-w-xs font-bold text-white">Drug addiction and recovery discussed</p>
        </div>

        <div className="flex flex-col space-y-1 text-sm font-medium">
          <h4 className="mb-1 text-white">Learn</h4>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
        </div>
        
        <div className="flex flex-col space-y-1 text-sm font-medium">
          <h4 className="mb-1 text-white">Learn</h4>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
        </div>
        
        <div className="flex flex-col space-y-1 text-sm font-medium">
          <h4 className="mb-1 text-white">Learn</h4>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
          <Link className="text-slate-400" to='/'>Blog</Link>
        </div>
      </div>

      <div className="flex justify-between py-8 text-xs text-slate-400">
        <span>© Recover is possible</span>
        <div className="space-x-2">
          <span>Terms of Service</span>
          <span>Privacy Notice</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer