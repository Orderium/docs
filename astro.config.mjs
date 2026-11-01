// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const prod = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
    site: prod ? "https://imkarven.github.io" : undefined,
    base: prod ? "/Orderium" : undefined,
    integrations: [
        // save Markdown renderer configuration to globals for use by the on-demand renderer
        // order matters - we want this to use only our configuration
        {
            name: 'docs:config-md',
            hooks: {
                'astro:config:setup': ({ config }) => {
                    globalThis.markdownConfig = { ...config.markdown };
                },
            },
        },
        starlight({
            title: 'Orderium',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/ImKarven/Orderium' },
                { icon: 'discord', label: 'Discord', href: 'https://devdiscord.karven.qzz.io/' }
            ],
            sidebar: [
                {
                    label: 'For Administrators',
                    items: [
                        { label: 'How it works', link: 'admin/how-it-works' },
                        { label: 'Installing', link: 'admin/installing' },
                        { label: 'Using Orderium', link: 'admin/using-orderium' },
                        { label: 'Modifying Items', link: 'admin/modifying-items' },
                        { label: 'Configuration', link: 'admin/config' },
                    ],
                },
                {
                    label: 'For Developers',
                    items: [{ label: 'GUI System', link: 'dev/gui-system' }],
                },
            ],
            customCss: ['/src/styles/theme.css'],
        }),
    ],
});
