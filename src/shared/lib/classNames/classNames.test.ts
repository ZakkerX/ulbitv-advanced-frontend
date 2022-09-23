import { classNames } from '.';

describe('classNames', () => {
  test('With the first parameter', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('With additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('With mods', () => {
    const expected = 'someClass hovered scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('With mods false', () => {
    const expected = 'someClass scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: false, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('With mods undefined', () => {
    const expected = 'someClass scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: undefined, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });
});
