const path = require('path');
const camelcase = require('camelcase');

function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map((file) => {
    const basename = path.basename(file, path.extname(file));
    const componentName = camelcase(basename, { pascalCase: true });

    compoundExportEntries.push(`Sf${componentName}`);

    return `import Ps${componentName} from './${basename}';`;
  });

  const iconNames = compoundExportEntries.map(entry => `  '${entry}'`)

  return `import { SpaceProps } from 'styled-system';
${importEntries.join('\n')}
interface BaseProps {
  color?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
export type IconProps = BaseProps & SpaceProps;
export {
  ${compoundExportEntries.join(',\n  ')}
};
export type IconName =
${iconNames.join(' | \n')}
;`
}

module.exports = indexTemplate;