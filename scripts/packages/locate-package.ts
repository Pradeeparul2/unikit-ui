import path from 'node:path';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';
import { getPackageName } from './get-package-name';

export async function locatePackage(packageName: string) {
  let packagePath = path.join(getPath('packages'), getPackageName(packageName));
  if (packagePath.includes('@pradeeparul2/mantine')) {
    packagePath = packagePath.replace('@pradeeparul2/mantine-', '@mantine/');
  }
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
