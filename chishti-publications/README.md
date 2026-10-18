# Chishti Publications

A simple product catalog for [chishtipublications.com](https://chishtipublications.com).

Visitors browse books, copies, and educational products, then inquire on WhatsApp. There is no cart, checkout, payment, account, or database.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run lint
```

## Where things live

| What | File |
| --- | --- |
| Business name, website URL, WhatsApp number, email, address | `data/site.json` |
| Categories | `data/categories.json` |
| Products | `data/products.json` |
| Product images | `public/products/` |

The WhatsApp number is read from `data/site.json` only. Do not paste it into components.

## Contact details

Edit `data/site.json`:

```json
{
  "name": "Chishti Publications",
  "url": "https://chishtipublications.com",
  "tagline": "Books, copies, and educational products",
  "whatsappNumber": "923001234567",
  "email": "hello@example.com",
  "address": "Your address"
}
```

`whatsappNumber` is digits only, with the country code and without a plus sign. The `923001234567` value above is a format example. Replace it with the real business number. Leave a field as `""` if you do not have that detail yet.

## Add a product

1. Put the photo in `public/products/`. JPG, PNG, or WebP is best. A portrait photo keeps the grid even.
2. Add an object to `data/products.json`.
3. Redeploy the site.

```json
{
  "id": "020",
  "name": "Class 5 Mathematics Copy",
  "slug": "class-5-mathematics-copy",
  "category": "Copies",
  "price": null,
  "image": "/products/class-5-mathematics-copy.jpg",
  "description": "Square-ruled mathematics copy.",
  "sku": "CP-020",
  "specifications": [
    { "label": "Ruling", "value": "Square" }
  ],
  "featured": true
}
```

- `id` and `slug` must be unique. The slug becomes the page address: `/products/class-5-mathematics-copy`.
- `category` must match a `name` in `data/categories.json` exactly.
- `price` is optional. Use a number in Pakistani rupees, such as `250`, or `null` when there is no price. Do not invent a price.
- `image` can be `""` until a photo is ready. The site shows a cover placeholder.
- `sku` and `specifications` can be left out.
- `featured: true` shows the product on the homepage. Leave the field out otherwise.

To edit a product, change its object. To delete one, remove the object. You can delete the image file as well.

If a product still points at a `.svg` cover that does not exist yet, run:

```bash
npm run covers
```

That writes a simple placeholder cover. Replace it with a real photo when you have one.

The products currently in `data/products.json` are sample entries so the catalog can be reviewed. Replace them with the real list before launch.

## Add a category

Add an object to `data/categories.json`:

```json
{
  "name": "Art Supplies",
  "slug": "art-supplies",
  "description": "Materials for drawing and art class.",
  "accent": "#243044"
}
```

`accent` is the color on the top edge of the category card.

## Favorites

Favorites are stored in the visitor's browser (`localStorage`). Refreshing the page keeps them. There are no customer accounts.

## Why there is no admin panel

The catalog is expected to stay around 200 products. Editing `data/products.json` and dropping images into `public/products/` is enough. An admin screen would need a login and a database, which this site is deliberately avoiding.

## Deploy on Vercel

This folder is its own Next.js app.

1. Create a GitHub repository for Chishti Publications.
2. Use this folder as the repository root.
3. Import it in the existing Vercel account. Framework preset: Next.js. No environment variables are required.
4. Add the domain `chishtipublications.com`.
5. Set the WhatsApp number, email, and address in `data/site.json`, then redeploy.

If this folder stays inside another repository, set the Vercel project Root Directory to `chishti-publications`.
