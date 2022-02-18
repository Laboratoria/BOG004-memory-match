import App from './App';
/* import main from 'main.js'; Pensé que realizar esto es importante*/ 


describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); 

/*Intento uno de crear un test para que una función exista */

describe('have button', () => {
  it('should be a button', () => {
    expect (typeof HTMLElement) .toBe('function');
  });
}); 

describe('document.getElementById', () => {
  it('should be a function', () => {
    expect ( typeof document.getElementById). toBe ('function')
  });
});
