export default function PageHead({ tag, tagColor = '', icon: Icon, title, lede }) {
  return (
    <>
      <span className={`tag ${tagColor}`}>{tag}</span>
      {Icon && <div className="icon-block"><Icon /></div>}
      <h1>{title}</h1>
      {lede && <p className="lede">{lede}</p>}
    </>
  )
}
