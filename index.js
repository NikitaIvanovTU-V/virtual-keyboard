/* eslint-disable import/extensions */
import { keyboardNode } from './KeyboardLayout.js';

class Keyboard {
  createKeyboard() {
    this.wrapper = document.createElement('main');
    this.wrapper.setAttribute('class', 'wrapper');
    this.textArea = document.createElement('textarea');
    this.textArea.setAttribute('class', 'textarea');
    this.textArea.setAttribute('rows', '10');
    this.textArea.setAttribute('cols', '50');
    this.wrapper.append(this.textArea);
    this.keyboard = document.createElement('div');
    this.keyboard.setAttribute('class', 'keyboard');
    this.keyboard.append(keyboardNode);
    this.wrapper.append(this.keyboard);
    document.body.append(this.wrapper);
  }
}
const keyboard = new Keyboard();
keyboard.createKeyboard();
