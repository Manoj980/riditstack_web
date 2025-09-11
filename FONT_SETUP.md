# Font Setup Documentation

## Current Implementation

The project is currently using **Inter** as a substitute for **TT Commons Pro**.

### Configuration

- **Font**: Inter (Google Fonts)
- **Variable**: `--font-tt-commons-pro`
- **Weights**: 400, 500, 600, 700
- **Features**: Kerning, ligatures, contextual alternates enabled

### Typography Enhancements

The project includes custom CSS to make Inter behave more like TT Commons Pro:

- Adjusted letter-spacing (-0.01em for body, -0.02em for headings)
- Enhanced font smoothing
- Optimized line-height (1.6 for paragraphs)
- Font feature settings for better typography

## Implementing Actual TT Commons Pro

To replace Inter with actual TT Commons Pro font files:

### Step 1: Obtain Font Files

1. Purchase or obtain TT Commons Pro font files
2. Ensure you have the following weights:
   - Regular (400)
   - Medium (500) 
   - DemiBold (600)
   - Bold (700)

### Step 2: Add Font Files

1. Create `src/fonts/` directory if it doesn't exist
2. Add the following font files:
   - `TTCommonsPro-Regular.woff2`
   - `TTCommonsPro-Medium.woff2` 
   - `TTCommonsPro-DemiBold.woff2`
   - `TTCommonsPro-Bold.woff2`

### Step 3: Update Layout Configuration

Replace the Inter import in `src/app/layout.tsx`:

```typescript
// Remove this
import { Inter } from "next/font/google";

// Add this
import localFont from 'next/font/local';

// Replace the Inter configuration with:
const ttCommonsPro = localFont({
  src: [
    {
      path: '../fonts/TTCommonsPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TTCommonsPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/TTCommonsPro-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TTCommonsPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-tt-commons-pro',
  display: 'swap',
});
```

### Step 4: Legal Compliance

- Ensure proper licensing for TT Commons Pro
- Add font license information to project documentation
- Update any legal/attribution requirements

### Step 5: Test and Optimize

1. Test font loading across different devices and browsers
2. Verify font fallbacks work correctly
3. Check performance impact and optimize loading
4. Validate typography rendering across all pages

## Font Features

The current CSS includes these font features:
- Kerning
- Ligatures 
- Contextual ligatures
- Contextual alternates
- Case-sensitive forms (for headings)
- Tabular numerals (for data)

These features ensure optimal typography regardless of whether Inter or TT Commons Pro is used.