export function truncate(text, limit, ending = "...") {
  const splitText = text.split(" ");
  const reducedText = splitText.slice(0, limit);
  const addedEnding = [...reducedText, ending];
  return addedEnding.join(" ");
}

export default { truncate };
