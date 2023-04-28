/* eslint-disable import/extensions */
import { keyboardNode, keys } from './KeyboardLayout.js';

class Keyboard {
  constructor() {
    this.language = 'en';
    this.caps = false;
    this.shift = false;
  }

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
    this.setSel();
    this.bindEvents();
  }

  setSel() {
    this.sel = this.textArea.selectionStart;
    this.selE = this.textArea.selectionEnd;
  }

  getSel() {
    this.textArea.selectionStart = this.sel;
    this.textArea.selectionEnd = this.selE;
  }

  bindEvents() {
    this.textArea.addEventListener('blur', () => { // text area is always focused
      setTimeout(() => {
        this.textArea.focus();
        this.getSel();
      }, 0);
    });

    this.keyboard.addEventListener('mouseover', () => { // remember textArea's selection before clicking on the keyboard
      this.setSel();
    });

    // keyboard events
    document.addEventListener('keydown', (e) => {
      this.setSel();
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.shift = true;
      const key = document.getElementById(e.code);
      if (keys[e.code]) {
        if (!e.ctrlKey) {
          if (e.code === 'CapsLock' && !e.repeat) {
            key.classList.toggle('active');
            this.caps = !this.caps;
            this.switchCase(this.shift);
          } else if (((this.shift && e.altKey) || (e.altKey && this.shift)) && !e.repeat) {
            this.language = (this.language === 'en') ? 'ru' : 'en';
            this.switchLanguage();
          } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.repeat) {
            this.switchShift(this.shift);
            key.classList.add('active');
          } else {
            e.preventDefault();
            key.classList.add('active');
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
        } else key.classList.add('active');
      } else e.preventDefault();
    });

    document.addEventListener('keyup', (e) => {
      const key = document.getElementById(e.code);
      if (keys[e.code] && !(e.code === 'CapsLock') && !(e.code === 'ShiftLeft' || e.code === 'ShiftRight')) {
        key.classList.remove('active');
      } else if ((e.code === 'ShiftLeft' || e.code === 'ShiftRight') && !e.repeat) {
        this.shift = false;
        this.switchShift(false);
        key.classList.remove('active');
      }
    });
    // Mouse events
    this.keyboard.addEventListener('mousedown', (e) => {
      this.setSel();
      const clickEvent = new KeyboardEvent('keydown', {
        code: e.target.id,
      });
      document.dispatchEvent(clickEvent);
      document.body.addEventListener('mouseup', () => {
        const clickEvent2 = new KeyboardEvent('keyup', {
          code: e.target.id,
        });
        document.dispatchEvent(clickEvent2);
      });
    });
  }

  input(str) {
    this.textArea.value = this.textArea.value.slice(0, this.sel)
      + str + this.textArea.value.slice(this.selE);
    this.textArea.selectionStart = this.sel + 1;
    this.textArea.selectionEnd = this.sel + 1;
    this.setSel();
  }

  backspace() {
    if (this.sel === this.selE) {
      this.textArea.value = this.textArea.value.slice(0, this.sel - 1)
        + this.textArea.value.slice(this.selE);
      this.textArea.selectionStart = this.sel - 1;
      this.textArea.selectionEnd = this.sel - 1;
    } else {
      this.textArea.value = this.textArea.value.slice(0, this.sel)
      + this.textArea.value.slice(this.selE);
      this.textArea.selectionStart = this.sel;
      this.textArea.selectionEnd = this.sel;
    }
    this.setSel();
  }

  delete() {
    if (this.sel === this.selE) {
      this.textArea.value = this.textArea.value.slice(0, this.sel)
        + this.textArea.value.slice(this.selE + 1);
      this.textArea.selectionStart = this.sel;
      this.textArea.selectionEnd = this.sel;
    } else {
      this.textArea.value = this.textArea.value.slice(0, this.sel)
      + this.textArea.value.slice(this.selE);
      this.textArea.selectionStart = this.sel;
      this.textArea.selectionEnd = this.sel;
    }
    this.setSel();
  }

  switchShift(shift) {
    if (shift) {
      Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach((e) => {
        if (!keys[e.id].special) {
          if (keys[e.id].shift) {
            e.textContent = keys[e.id].shift[this.language];
          }
          if (this.caps) {
            e.textContent = e.textContent.toLocaleLowerCase();
          } else {
            e.textContent = e.textContent.toLocaleUpperCase();
          }
        }
      });
    } else {
      Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach((e) => {
        if (!keys[e.id].special) {
          if (keys[e.id].shift) {
            e.textContent = keys[e.id][this.language];
          }
          if (this.caps) {
            e.textContent = e.textContent.toLocaleUpperCase();
          } else {
            e.textContent = e.textContent.toLocaleLowerCase();
          }
        }
      });
    }
  }

  switchLanguage(shift) {
    Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach((e) => {
      e.textContent = keys[e.id][this.language];
      this.switchCase(shift);
    });
  }

  switchCase(shift) {
    if ((this.caps && !shift) || (!this.caps && shift)) {
      this.toUpper();
    } else {
      this.toLower();
    }
  }

  toLower() {
    Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach((e) => {
      if (!keys[e.id].special) {
        e.textContent = e.textContent.toLocaleLowerCase();
      }
    });
  }

  toUpper() {
    Array.from(this.keyboard.querySelectorAll('.keyboard__key')).forEach((e) => {
      if (!keys[e.id].special) {
        e.textContent = e.textContent.toLocaleUpperCase();
      }
    });
  }
}
const keyboard = new Keyboard();
keyboard.createKeyboard();
