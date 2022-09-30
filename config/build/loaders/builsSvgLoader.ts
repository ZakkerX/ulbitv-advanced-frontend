export const buildSvgLoader = () => ({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
});
