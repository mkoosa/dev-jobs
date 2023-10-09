import srcPath from '@/Api/srcPath';

describe('scr path', () => {
  it("converts first  capital letter company's name to lower letter and return src path", () => {
    const result = srcPath('Google');
    expect(result).toBe('/src/assets/logos/google.svg');
  });
});
