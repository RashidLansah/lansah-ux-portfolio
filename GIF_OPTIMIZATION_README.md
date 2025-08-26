# GIF Optimization for Website Performance

## Overview
This project uses optimized GIFs to improve website loading performance while maintaining visual quality.

## File Structure
```
public/images/experiments/
├── ai-confidence-reasoning.gif (1.27MB) - Original file
├── human-feedback-loop.gif (1.50MB) - Original file
└── optimized/
    ├── ai-confidence-reasoning-optimized.gif (68KB) - 94.8% smaller
    └── human-feedback-loop-optimized.gif (61KB) - 96.0% smaller
```

## Optimization Results
- **ai-confidence-reasoning.gif**: 1.27MB → 68KB (94.8% reduction)
- **human-feedback-loop.gif**: 1.50MB → 61KB (96.0% reduction)

## Implementation Details

### 1. Responsive Images
The website now uses `srcset` and `sizes` attributes to serve appropriate GIF sizes:
- **Mobile (≤480px)**: 400px width optimized GIFs
- **Tablet (≤768px)**: 800px width optimized GIFs  
- **Desktop (>768px)**: 1200px width original GIFs

### 2. Lazy Loading
All experiment GIFs use `loading="lazy"` for better performance.

### 3. Fallback Mechanism
If optimized GIFs fail to load, the system automatically falls back to original files.

### 4. Progressive Enhancement
- Optimized GIFs load first (faster)
- Original GIFs serve as fallback (reliable)
- Responsive sizing ensures optimal performance on all devices

## Benefits
- **Faster Loading**: 94-96% smaller file sizes
- **Better UX**: Reduced loading times, especially on mobile
- **SEO Friendly**: Faster page load speeds
- **Cost Effective**: Reduced bandwidth usage
- **Maintains Quality**: Visual quality preserved while optimizing performance

## Technical Notes
- Optimized GIFs use 80% quality and maximum compression effort
- Fallback system ensures reliability
- Responsive design adapts to different screen sizes and connection speeds
