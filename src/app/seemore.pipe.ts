import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'seemore',
})
export class SeemorePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    const div = document.createElement('div');
    div.innerHTML = html;

    let textContent = '';
    let charCount = 0;

    function getText(node: Node): string {
      if (charCount >= 100) return '';

      if (node.nodeType === Node.TEXT_NODE) {
        let text = node.textContent || '';
        if (charCount + text.length > 100) {
          text = text.substring(0, 100 - charCount);
        }
        charCount += text.length;
        return text;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        let element = node as HTMLElement;
        let result = `<${element.tagName.toLowerCase()}`;
        for (let i = 0; i < element.attributes.length; i++) {
          const attr = element.attributes[i];
          result += ` ${attr.name}="${attr.value}"`;
        }
        result += '>';
        for (let i = 0; i < element.childNodes.length; i++) {
          result += getText(element.childNodes[i]);
          if (charCount >= 100) break;
        }
        result += `</${element.tagName.toLowerCase()}>`;
        return result;
      }

      return '';
    }

    textContent = getText(div);

    // Return the sanitized HTML
    return this.sanitizer.bypassSecurityTrustHtml(textContent + '...');
  }
}
