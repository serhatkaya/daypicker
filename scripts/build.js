const { execSync } = require('child_process');
[
  {
    name: 'Core',
    src: 'packages/core',
  },
  {
    name: 'Angular version',
    src: 'packages/angular',
  },
  {
    name: 'React version',
    src: 'packages/react-lib',
  },
  {
    name: 'Vue version',
    src: 'packages/vue-lib',
  },
].forEach(pkg => {
  execSync(`npm --prefix ${pkg.src} run build`);
  console.log(`${pkg.name} built`);
});
