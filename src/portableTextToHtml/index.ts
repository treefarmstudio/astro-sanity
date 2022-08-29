import { toHTML } from '@portabletext/to-html';

export function portabletextToHtml(portabletext: any, customComponents = {}) {
  return toHTML(portabletext, { components: customComponents });
}