export const discordEmbed = {
    type: 17,
    accent_color: null,
    spoiler: true,
    components: [
        {
            type: 9,
            accessory: {
                type: 11,
                media: {
                    url: 'https://github.com/orderium.png',
                    proxy_url: 'https://github.com/orderium.png',
                },
                description: null,
                spoiler: false,
            },
            components: [
                {
                    type: 10,
                    content: '# Orderium',
                },
                {
                    type: 10,
                    content:
                        'A Paper plugin that implements a trading system for your server economy.',
                },
                {
                    type: 10,
                    content: '-# Not associated with or approved by Mojang, Microsoft or PaperMC.',
                },
            ],
        },
        {
            type: 14,
            divider: true,
            spacing: 1,
        },
        {
            type: 10,
            content: '## Check out the project:',
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    style: 5,
                    label: 'Download on Modrinth',
                    emoji: {
                        name: '🐸',
                        id: null,
                    },
                    disabled: false,
                    url: 'https://modrinth.com/plugin/orderium',
                },
            ],
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    style: 5,
                    label: 'Documentation Website',
                    emoji: {
                        id: null,
                        name: '🌐',
                    },
                    disabled: false,
                    url: 'https://orderium.github.io/',
                },
            ],
        },
        {
            type: 1,
            components: [
                {
                    type: 2,
                    style: 5,
                    label: 'Open-source on GitHub',
                    emoji: {
                        id: null,
                        name: '🔓',
                    },
                    disabled: false,
                    url: 'https://github.com/Orderium',
                },
            ],
        },
    ],
};

export const stringifiedDiscordEmbed = JSON.stringify(discordEmbed).replace(/</g, '\\u003c');
