// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Orderium',
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/ImKarven/Orderium' },
            ],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: "How it works", link: '/getting-started/how-it-works' },
                        { label: 'Installing', link: '/getting-started/installing' },
                        { label: 'Using Orderium', link: '/getting-started/using-orderium' },
                    ],
                },
                {
                    label: 'GUI System',
                    items: [{ label: 'Introduction', link: '/gui-system/introduction' }],
                },
            ],
            customCss: ['/src/styles/theme.css'],
        }),
    ],
});
