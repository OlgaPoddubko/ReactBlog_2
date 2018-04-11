import routes from './routes';

describe('count routes', () => {
  it('should have three routes', () => {
    expect(routes.length).toBe(3);
  });
});
