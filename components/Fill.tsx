// Renders text, turning any [bracketed placeholder] into a visible
// "still to fill in" mark so nothing invented passes as fact.
export function Fill({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("[") && p.endsWith("]") ? (
          <mark key={i} className="fill" title="Placeholder — to be filled in">
            {p.slice(1, -1)}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}
