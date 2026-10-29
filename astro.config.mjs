// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
            ],
            sidebar: [
                {
                    label: 'For Administrators',
                    items: [
                        { label: 'How it works', link: '/admin/how-it-works' },
                        { label: 'Installing', link: '/admin/installing' },
                        { label: 'Using Orderium', link: '/admin/using-orderium' },
                        { label: 'Configuring', link: '/admin/config' },
                    ],
                },
                {
                    label: 'For Developers',
                    items: [{ label: 'GUI System', link: '/dev/gui-system' }],
                },
            ],
            customCss: ['/src/styles/theme.css'],
        }),
    ],
});
