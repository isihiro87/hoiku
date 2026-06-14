// See all configuration options: https://remotion.dev/docs/config
// Each option also is available as a CLI flag: https://remotion.dev/docs/cli

// Note: When using the Node.JS APIs, the config file doesn't apply. Instead, pass options directly to the APIs

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';
import { existsSync } from 'fs';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);
Config.setChromiumOpenGlRenderer('swangle');
Config.setChromiumDisableWebSecurity(true);
// devcontainerではバンドルのLinux版chromeを使用。存在しない環境（Windowsホスト等）では
// 指定せず、remotion同梱のchromeを自動利用する（環境ごとの手動切替が不要）。
const dcChrome = '/workspaces/hoiku_shiken/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell';
if (existsSync(dcChrome)) {
  Config.setBrowserExecutable(dcChrome);
}
