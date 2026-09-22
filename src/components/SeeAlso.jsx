import { Link } from 'react-router-dom'

export default function SeeAlso({ links }) {
  return (
    <div className="see-also">
      <span className="lbl">See also</span>
      {links.map(([to, label]) => (
        <Link key={to} to={to}>{label}</Link>
      ))}
    </div>
  )
}
