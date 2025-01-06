module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: 'var(--color-dark)',
                light: 'var(--color-light)',
            },
            fontFamily: {
                Exil71: ['Exil71', 'sans-serif'],
                nmRegular: ['nmRegular', 'sans-serif'],
            },
            textColor: {
                dark: 'var(--color-dark)',
                light: 'var(--color-light)',
            },
            backgroundColor: {
                dark: 'var(--color-dark)',
                light: 'var(--color-light)',
            },
            borderColor: {
                dark: 'var(--color-dark)',
                light: 'var(--color-light)',
            },
        },
    },
    plugins: [],
};
