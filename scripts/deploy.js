import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

dotenv.config({ quiet: true });

const deployPath = process.env.DEPLOY_PATH;
const distPath = path.resolve('dist');
const targetPath = `/var/www${deployPath}`;

if (!deployPath) {
  console.error('❌ DEPLOY_PATH is not defined in .env');
  process.exit(1);
}

if (!fs.existsSync(distPath)) {
  console.error('❌ dist folder not found. Run build first.');
  process.exit(1);
}

try {
  console.log(`Deploying to ${targetPath}`);

  execSync(`sudo rsync -av --delete ${distPath}/ ${targetPath}/`, {
    stdio: 'inherit',
  });

  console.log('✅ Deployment completed successfully');
} catch (error) {
  console.error('❌ Deployment failed');
  console.error(error.message);
  process.exit(1);
}
