// Minimal on purpose: no colored tag pill, no icon graphic. Just a quiet
// dateline-style label and a title, so the prose underneath carries the
// weight instead of the chrome around it.
export default function PageHead({ tag, title, lede }) {
  return (
    <>
      {tag && <p className="entry-mark">{tag}</p>}
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </>
  )
}
