export default function limitCollectionTitleLength(elementTitle) {
    const content = elementTitle;
    const maxLength = 10;

    if (content.length > maxLength) {
      elementTitle.textContent = content.slice(0, maxLength);
    };
}