import { toHTML } from '@portabletext/to-html';

export function portableTextToHtml(portabletext: any, customComponents = {}) {
  return toHTML(portabletext, { components: customComponents });
}