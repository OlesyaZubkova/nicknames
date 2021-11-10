import Validator from '../nicknames';

describe('should determine the correct writing of the name', () => {
  test('should check the simple name', () => {
    const name = new Validator('AntonIvanov');
    expect(name.validateUsername()).toBe(true);
  });

  test('should check the name with numbers and symbols', () => {
    const name = new Validator('An-ton416Ivanov_v');
    expect(name.validateUsername()).toBe(true);
  });

  test('wrong writing beginning of the name', () => {
    const name = new Validator('789AntonIvanov');
    expect(name.validateUsername()).toBe(false);
  });

  test('wrong writing end of the name', () => {
    const name = new Validator('AntonIvanov_');
    expect(name.validateUsername()).toBe(false);
  });

  test('too many numbers in the name', () => {
    const name = new Validator('Anton1268Ivanov8');
    expect(name.validateUsername()).toBe(false);
  });
});
