module.exports = {
    important: true,
    theme: {
        extend: {
            colors: {
                'custom-primary': 'var(--primary)',
                'custom-secondary': 'var(--secondary)',
                'custom-tertiary': 'var(--tertiary)',
                'custom-text': 'var(--text-main)',
                'custom-text-secondary': 'var(--text-secondary)',
                accent: 'var(--accent)',
                accentHover: 'var(--accent-hover)',
                white: '#fafafa',
                bluegreen: {
                    300: '#119DA4',
                    600: '#0C7489',
                    900: '#13505B',
                },
                yellow: '#E0CA3C',
                translucentGrey: 'rgba(120, 120, 120, .2)',
            },
        },
    },
    variants: {
        opacity: ['responsive', 'hover'],
    },
};