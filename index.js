/* eslint-disable import/extensions */
import { keyboardNode, keys } from './KeyboardLayout.js';

class Keyboard {
  createKeyboard() {
    this.wrapper = document.createElement('main');
    this.wrapper.setAttribute('class', 'wrapper');
    this.textArea = document.createElement('textarea');
    this.textArea.setAttribute('class', 'textarea');
    this.textArea.setAttribute('rows', '20');
    this.textArea.setAttribute('cols', '100');
    this.wrapper.append(this.textArea);
    this.keyboard = document.createElement('div');
    this.keyboard.setAttribute('class', 'keyboard');
    this.keyboard.append(keyboardNode);
    this.wrapper.append(this.keyboard);
    this.about = document.createElement('p');
    this.about.setAttribute('class', 'about');
    this.about.innerHTML = 'Press Shift+Alt to switch languages <br> Tested in Windows <br> Task done for RS School by Nikita Ivanov';
    this.wrapper.append(this.about);
    document.body.append(this.wrapper);
    this.textArea.focus();
    this.bindEvents();
  }

  bindEvents() {
    // text area is always focused
    this.textArea.addEventListener('blur', () => {
      setTimeout(() => {
        this.textArea.focus();
      }, 0);
    });
    //
    document.addEventListener('keydown', (e) => {
      const key = document.getElementById(e.code);
      if (keys[e.code]) {
        key.classList.add('active');
        e.preventDefault();
        if (!keys[e.code].special) {
          this.input(key.textContent);
        } else {
          switch (e.code) {
            case 'Backspace':
              this.backspace();
              break;
            case 'Delete':
              this.delete();
              break;
            case 'Tab':
              this.input('\t');
              break;
            case 'Enter':
              this.input('\n');
              break;
            default:
              break;
          }
        }
      }
    });
  }

  input(str) {
    this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart)
      + str + this.textArea.value.slice(this.textArea.selectionEnd);
  }

  backspace() {
    this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart - 1)
      + this.textArea.value.slice(this.textArea.selectionEnd);
  }

  delete() {
    const oldSelection = this.textArea.selectionStart;
    this.textArea.value = this.textArea.value.slice(0, this.textArea.selectionStart)
        + this.textArea.value.slice(this.textArea.selectionEnd + 1);
    this.textArea.selectionStart = oldSelection;
    this.textArea.selectionEnd = oldSelection;
  }
}

const keyboard = new Keyboard();
keyboard.createKeyboard();
