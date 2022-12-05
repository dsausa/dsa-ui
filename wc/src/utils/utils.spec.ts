import { maybeLoadGlobal } from './utils';
// import fs from "fs";

describe('font utils', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('maybeLoadFont', () => {
    it('should load font in the document head if not already loaded', () => {
      // commented out code was from version that found fonts dynamically.
      // keeping code around in case we find another way to do that or we
      // need a way to generate fontfaces dynamically.

      // const readdirSpy = jest.spyOn(fs, 'readdir').mockImplementation(
      //     (_path, _opts, cb ) => {
      //         cb(null, mockFiles as any);
      //     }
      // );
      maybeLoadGlobal();
      // finds all fonts in folder
      // const pathParam = readdirSpy.mock.calls[0][0];
      // expect(pathParam).toEqual('./assets/fonts/klima');

      // creates a style element with id
      expect(document.head.children.length).toBe(1);
      const style = document.head.children[0] as HTMLStyleElement;
      expect(style.tagName).toBe('STYLE');
      expect(style.id).toBe('dsa-ui-styles-loader');

      // only loads fonts once, even if called multiple times
      maybeLoadGlobal();
      expect(document.head.children.length).toBe(1);
    });
  });
});
