export function transformIconName(name) {
  const nameSplit = name.split("-");
  return nameSplit.map((section) => capitalize(section)).join("");
}

function capitalize(word) {
  if (word.length === 0) {
    return word;
  }

  if (word.length === 1) {
    return word.toUpperCase();
  }

  return word[0].toUpperCase() + word.slice(1, word.length);
}

export function generateSvgString(icon) {
  const tags = [];
  for (const element of icon) {
    const tag = generateTagFromElement(element);
    tags.push(tag);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n${tags.join("\n")}\n</svg>`;
}

function generateTagFromElement(element) {
  const tagName = element[0];
  const attributes = element[1];
  const transformedAttributes = transformAttributes(attributes);
  return `<${tagName} ${transformedAttributes} />`;
}

function transformAttributes(attributes) {
  const transformedAttributes = [];
  for (const prop in attributes) {
    transformedAttributes.push(`${prop}="${attributes[prop]}"`);
  }

  return transformedAttributes.join(" ");
}
