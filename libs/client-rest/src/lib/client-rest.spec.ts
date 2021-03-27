import { clientRest } from './client-rest';

describe('clientRest', () => {
  it('should work', () => {
    expect(clientRest()).toEqual('client-rest');
  });
});
