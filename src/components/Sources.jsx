export default function Sources({ items }) {
  return (
    <div className="sources">
      <h3>Fonti</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
