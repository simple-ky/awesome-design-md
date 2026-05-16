# DEPLOY.md — Restoran Kum Heng

Generated landing site. Three deploy options, all free:

## Option 1: Cloudflare Pages (Recommended — fastest)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click **Create a project → Direct upload**
3. Drag the entire `restoran/` folder onto the upload zone
4. Click **Deploy site** → live URL in ~30 seconds

## Option 2: Vercel

```bash
npx vercel deploy ./restoran --prod
```

## Option 3: GitHub Pages

1. Push the `restoran/` folder contents to a public GitHub repo
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Live at `https://<username>.github.io/<repo>/`

---

## Before going live — replace placeholders

| Placeholder | Replace with |
|---|---|
| `+60XXXXXXXXX` (×3 in index.html) | Real WhatsApp/phone number in E.164 format |
| `Jalan SS2/24` (address) | Confirmed street address |
| `〔Alamat placeholder〕` note | Remove once address confirmed |
| Gradient placeholder images | Real photos — drop `.webp` files into `restoran/assets/` and update `<img>` src |
| Google Maps embed | Add `<iframe src="https://www.google.com/maps/embed?pb=...">` in the hours section |

## Adding real photos

Replace each `.gallery__item` `<div>` with:

```html
<img class="gallery__item gallery__item--1"
     src="assets/gallery-01.webp"
     alt="Suasana dalaman kedai"
     loading="lazy">
```

Recommended photo spec: `.webp`, 800×600px, max 150kb each.
