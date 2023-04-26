const keyboardLayout = [
  [
    {
      code: 'Backquote',
      special: false,
      text: { en: '`', ru: 'ё' },
      size: 'normal',
    },
    {
      code: 'Digit1',
      special: false,
      text: { en: '1', ru: '1' },
      size: 'normal',
    },
    {
      code: 'Digit2',
      special: false,
      text: { en: '2', ru: '2' },
      size: 'normal',
    },
    {
      code: 'Digit3',
      special: false,
      text: { en: '3', ru: '3' },
      size: 'normal',
    },
    {
      code: 'Digit4',
      special: false,
      text: { en: '4', ru: '4' },
      size: 'normal',
    },
    {
      code: 'Digit5',
      special: false,
      text: { en: '5', ru: '5' },
      size: 'normal',
    },
    {
      code: 'Digit6',
      special: false,
      text: { en: '6', ru: '6' },
      size: 'normal',
    },
    {
      code: 'Digit7',
      special: false,
      text: { en: '7', ru: '7' },
      size: 'normal',
    },
    {
      code: 'Digit8',
      special: false,
      text: { en: '8', ru: '8' },
      size: 'normal',
    },
    {
      code: 'Digit9',
      special: false,
      text: { en: '9', ru: '9' },
      size: 'normal',
    },
    {
      code: 'Digit0',
      special: false,
      text: { en: '0', ru: '0' },
      size: 'normal',
    },
    {
      code: 'Minus',
      special: false,
      text: { en: '-', ru: '-' },
      size: 'normal',
    },
    {
      code: 'Equal',
      special: false,
      text: { en: '=', ru: '=' },
      size: 'normal',
    },
    {
      code: 'Backspace',
      special: true,
      text: { en: 'Back', ru: 'Back' },
      size: 'big',
    },
    {
      code: 'Delete',
      special: true,
      text: { en: 'Del', ru: 'Del' },
      size: 'big',
    },
  ],
  [
    {
      code: 'Tab',
      special: true,
      text: { en: 'Tab', ru: 'Tab' },
      size: 'bigger',
    },
    {
      code: 'KeyQ',
      special: false,
      text: { en: 'q', ru: 'й' },
      size: 'normal',
    },
    {
      code: 'KeyW',
      special: false,
      text: { en: 'w', ru: 'ц' },
      size: 'normal',
    },
    {
      code: 'KeyE',
      special: false,
      text: { en: 'e', ru: 'у' },
      size: 'normal',
    },
    {
      code: 'KeyR',
      special: false,
      text: { en: 'r', ru: 'к' },
      size: 'normal',
    },
    {
      code: 'KeyT',
      special: false,
      text: { en: 't', ru: 'е' },
      size: 'normal',
    },
    {
      code: 'KeyY',
      special: false,
      text: { en: 'y', ru: 'н' },
      size: 'normal',
    },
    {
      code: 'KeyU',
      special: false,
      text: { en: 'u', ru: 'г' },
      size: 'normal',
    },
    {
      code: 'KeyI',
      special: false,
      text: { en: 'i', ru: 'ш' },
      size: 'normal',
    },
    {
      code: 'KeyO',
      special: false,
      text: { en: 'o', ru: 'щ' },
      size: 'normal',
    },
    {
      code: 'KeyP',
      special: false,
      text: { en: 'p', ru: 'з' },
      size: 'normal',
    },
    {
      code: 'BracketLeft',
      special: false,
      text: { en: '[', ru: 'х' },
      size: 'normal',
    },
    {
      code: 'BracketRight',
      special: false,
      text: { en: ']', ru: 'ъ' },
      size: 'normal',
    },
    {
      code: 'Backslash',
      special: false,
      text: { en: '\\', ru: '\\' },
      size: 'normal',
    },
  ],
  [
    {
      code: 'CapsLock',
      special: true,
      text: { en: 'Caps', ru: 'Caps' },
      size: 'bigger',
    },
    {
      code: 'KeyA',
      special: false,
      text: { en: 'a', ru: 'ф' },
      size: 'normal',
    },
    {
      code: 'KeyS',
      special: false,
      text: { en: 's', ru: 'ы' },
      size: 'normal',
    },
    {
      code: 'KeyD',
      special: false,
      text: { en: 'd', ru: 'в' },
      size: 'normal',
    },
    {
      code: 'KeyF',
      special: false,
      text: { en: 'f', ru: 'а' },
      size: 'normal',
    },
    {
      code: 'KeyG',
      special: false,
      text: { en: 'g', ru: 'п' },
      size: 'normal',
    },
    {
      code: 'KeyH',
      special: false,
      text: { en: 'h', ru: 'р' },
      size: 'normal',
    },
    {
      code: 'KeyJ',
      special: false,
      text: { en: 'j', ru: 'о' },
      size: 'normal',
    },
    {
      code: 'KeyK',
      special: false,
      text: { en: 'k', ru: 'л' },
      size: 'normal',
    },
    {
      code: 'KeyL',
      special: false,
      text: { en: 'l', ru: 'д' },
      size: 'normal',
    },
    {
      code: 'Semicolon',
      special: false,
      text: { en: ';', ru: 'ж' },
      size: 'normal',
    },
    {
      code: 'Quote',
      special: false,
      text: { en: "'", ru: 'э' },
      size: 'normal',
    },
    {
      code: 'enter',
      special: true,
      text: { en: 'enter', ru: 'enter' },
      size: 'bigger',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      special: true,
      text: { en: 'Shift', ru: 'Shift' },
      size: 'bigger',
    },
    {
      code: 'KeyZ',
      special: false,
      text: { en: 'z', ru: 'я' },
      size: 'normal',
    },
    {
      code: 'KeyX',
      special: false,
      text: { en: 'x', ru: 'ч' },
      size: 'normal',
    },
    {
      code: 'KeyC',
      special: false,
      text: { en: 'c', ru: 'с' },
      size: 'normal',
    },
    {
      code: 'KeyV',
      special: false,
      text: { en: 'v', ru: 'м' },
      size: 'normal',
    },
    {
      code: 'KeyB',
      special: false,
      text: { en: 'b', ru: 'и' },
      size: 'normal',
    },
    {
      code: 'KeyN',
      special: false,
      text: { en: 'n', ru: 'т' },
      size: 'normal',
    },
    {
      code: 'KeyM',
      special: false,
      text: { en: 'm', ru: 'ь' },
      size: 'normal',
    },
    {
      code: 'Comma',
      special: false,
      text: { en: ',', ru: 'б' },
      size: 'normal',
    },
    {
      code: 'Period',
      special: false,
      text: { en: '.', ru: 'ю' },
      size: 'normal',
    },
    {
      code: 'Slash',
      special: false,
      text: { en: '/', ru: '.' },
      size: 'normal',
    },
    {
      code: 'ArrowUp',
      special: false,
      text: { en: '⯅', ru: '⯅' },
      size: 'normal',
    },
    {
      code: 'ShiftRight',
      special: true,
      text: { en: 'Shift', ru: 'Shift' },
      size: 'bigger',
    },
  ],
  [
    {
      code: 'ControlLeft',
      special: true,
      text: { en: 'Ctrl', ru: 'Ctrl' },
      size: 'big',
    },
    {
      code: 'AltLeft',
      special: true,
      text: { en: 'Alt', ru: 'Alt' },
      size: 'big',
    },
    {
      code: 'Space',
      special: false,
      text: { en: ' ', ru: ' ' },
      size: 'space',
    },
    {
      code: 'AltRight',
      special: true,
      text: { en: 'Alt', ru: 'Alt' },
      size: 'big',
    },
    {
      code: 'ControlRight',
      special: true,
      text: { en: 'Ctrl', ru: 'Ctrl' },
      size: 'big',
    },
    {
      code: 'ArrowLeft',
      special: false,
      text: { en: '⯇', ru: '⯇' },
      size: 'normal',
    },
    {
      code: 'ArrowDown',
      special: false,
      text: { en: '⯆', ru: '⯆' },
      size: 'normal',
    },
    {
      code: 'ArrowRight',
      special: false,
      text: { en: '⯈', ru: '⯈' },
      size: 'normal',
    },
  ],
];
const keyboardNode = document.createDocumentFragment();
const keys = {};
keyboardLayout.forEach((line) => {
  const row = document.createElement('div');
  row.classList.add('keyboard__row');
  line.forEach((key) => {
    keys[key.code] = key.text;
    keys[key.code].special = key.special;
    const keyButton = document.createElement('button');
    keyButton.setAttribute('id', key.code);
    keyButton.classList.add('keyboard__key');
    keyButton.classList.add(`keyboard__key_${key.size}`);
    keyButton.textContent = key.text.en;
    row.appendChild(keyButton);
  });
  keyboardNode.appendChild(row);
});
export { keys, keyboardNode };
