import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { apiSpecGenerator } from './scripts/api-spec-generator';
import { vueOutputTarget } from '@stencil/vue-output-target';

const componentCorePackage = '@serhatkaya/daypicker-core';

export const config: Config = {
  namespace: 'daypicker-core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage,
      outputType: 'component',
      directivesProxyFile: '../angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts',
    }),
    reactOutputTarget({
      componentCorePackage,
      proxiesFile: '../react-lib/lib/components/stencil-generated/index.ts',
    }),
    vueOutputTarget({
      componentCorePackage,
      proxiesFile: '../vue-lib/lib/components.ts',
    }),
    apiSpecGenerator({
      file: 'api.txt',
    }) as any,
  ],
  testing: {
    browserHeadless: 'new',
  },
};
