import {redirect} from 'remix'

export function loader() {
  return redirect('/posts')
}

export function action() {
  return redirect('/posts')
}