# Product images

Put one image per product in this folder.

Use the path in `data/products.json`:

```json
"image": "/products/class-5-mathematics-copy.jpg"
```

JPG, PNG, and WebP are optimized by Next.js. SVG files are shown as-is.

A portrait image, about 3:4, keeps the product grid aligned. If `image` is empty or the file is missing, the site shows a cover placeholder.
