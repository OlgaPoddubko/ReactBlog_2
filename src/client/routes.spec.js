import routes from './routes';

describe('count routes', () => {
  it('should have five routes', () => {
    expect(routes.length).toBe(5);
  });
});
