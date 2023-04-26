import { MantineThemeOverride } from "@mantine/core";

import { Lobster, Mulish } from "next/font/google";

const lobster = Lobster({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
});

const mulish = Mulish({
    weight: ["400", "600"],
    style: ["normal"],
    subsets: ["latin"],
});

export const globalTheme: MantineThemeOverride = {
    // Defines color scheme for all components, defaults to "light"
    colorScheme: "light",

    // Controls focus ring styles:
    // auto – display focus ring only when user navigates with keyboard (default)
    // always – display focus ring when user navigates with keyboard and mouse
    // never – focus ring is always hidden (not recommended)
    focusRing: "auto",

    // Change focus ring styles
    // focusRingStyles: {
    //   styles(theme: MantineThemeBase): CSSObject;
    //   resetStyles(theme: MantineThemeBase): CSSObject;
    //   inputStyles(theme: MantineThemeBase): CSSObject;
    // };

    // Determines whether motion based animations should be disabled for
    // users who prefer to reduce motion in their OS settings
    // respectReducedMotion: boolean;

    // Determines whether elements that do not have pointer cursor by default
    // (checkboxes, radio, native select) should have it
    cursorType: "default",

    // Default border-radius used for most elements
    defaultRadius: "md",

    // White and black colors, defaults to '#fff' and '#000'
    white: "#fefefe",
    black: "#111",

    // Object of arrays with 10 colors
    // colors: Record<string, Tuple<string, 10>>;

    // Key of theme.colors
    primaryColor: "orange",

    // Index of color from theme.colors that is considered primary, Shade type is 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    // primaryShade: Shade | { light: Shade; dark: Shade };

    // Default gradient used in components that support `variant="gradient"` (Button, ThemeIcon, etc.)
    // defaultGradient: { deg: number; from: MantineColor; to: MantineColor };

    // font-family and line-height used in most components
    fontFamily: mulish.style.fontFamily,
    // lineHeight: string | number;

    // Timing function used for animations, defaults to 'ease'
    // transitionTimingFunction: string;

    // Monospace font-family, used in Code, Kbd and Prism components
    // fontFamilyMonospace: string;

    // Sizes for corresponding properties
    // fontSizes: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
    // radius: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
    // spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;

    // Values used for box-shadow
    // shadows: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;

    // Breakpoints used in some components to add responsive styles
    // breakpoints: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;

    // Styles added to buttons with `:active` pseudo-class
    // activeStyles: CSSObject;

    // h1-h6 styles, used in Title and TypographyStylesProvider components
    headings: {
        // fontFamily: "'Caveat', 'cursive'",
        fontFamily: lobster.style.fontFamily,
        fontWeight: 600,
        sizes: {
            //   See heading options below
            h1: { fontSize: "48px" },
            h2: { fontSize: "36px" },
            //   h3: {fontSize: "20px"},
            //   h4: Heading;
            //   h5: Heading;
            //   h6: Heading;
        },
    },

    // theme functions, see in theme functions guide
    // fn: MantineThemeFunctions;

    // Left to right or right to left direction, see RTL Support guide to learn more
    // dir: 'ltr' | 'rtl';

    // Default loader used in Loader and LoadingOverlay components
    loader: "oval",

    // defaultProps, styles and classNames for components
    // components: ComponentsOverride;

    // Global styles
    // globalStyles: (theme: MantineTheme) => CSSObject;

    // Add your own custom properties on Mantine theme
    // other: Record<string, any>;

    components: {
        Button: {
            styles: {
                root: {
                    //   color: "#111",
                },
            },
        },
    },
};

//   interface Heading {
//     fontSize: CSSProperties['fontSize'];
//     fontWeight: CSSProperties['fontWeight'];
//     lineHeight: CSSProperties['lineHeight'];
//   }
