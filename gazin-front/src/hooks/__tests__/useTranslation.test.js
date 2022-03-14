import { translation } from '../../translation';
describe('useTranslation', () => {
  it('Should verify language translated is portuguese', () => {
    const text = translation('__MOCK__TEST__LANGUAGE__');

    expect(text).toEqual('Português');
  });
});
