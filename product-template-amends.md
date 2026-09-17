# Product page template amends

A log of changes to the product page templates as they are brought in line with the new default product page.

Within the product information area, nothing is deleted outright. Switched-off content stays saved in the theme editor as a hidden block, so it can be restored.

---

## Rollout: all templates now use the new default layout

All 21 product templates now use the new default product page layout, keeping only the differences agreed below (see "What each template keeps after the rebuild").

**Sections below the product information removed** (confirmed by client). Every product template, including the default, now has only:
1. the product information area
2. the "You may also like" related products section

This removed the "About [product]" materials section, Design Lab, the campaign image-and-text sections (pet, solitaire, Very Serious, Wonder Rocks), scrolling banners, featured collections and the old disclaimer sections. The previous version is saved in the project history and can be restored if needed.

**Checked on every template:**
- Purchase button wording
- Price
- Size guide, delivery estimate and product options, where agreed
- Shipping and Product Details rows
- Disclaimer
- Promo messages below the price
- No leftover old tick lines

The Japanese carat / gold weight disclaimer still applies on the templates that have it.

---

## Completed

### Default product page (all products on the standard template)
- Delivery estimate wording changed from "Arrives by" to **"Ships between"**.
- More space between the price and the product options.

### Pre-order template (`preorder`)
- Rebuilt on the new default layout.
- Purchase button reads **"Pre-order"**. This also applies to the Nova pre-order template, and "Buy it now" is hidden.

### Gift with purchase template (`gwp`)
- Rebuilt on the new default layout.
- Price, product options, add to cart and wishlist removed, because these items can't be purchased.
- The **Shop Jewelry**, **Shop Pet Collection** and **Chat With Us** buttons are kept. *Awaiting confirmation that these are still needed.*
- "Conscious practices" row removed from Product Details, to match the default.

### Summer sale template (`summer-sale`)
- Rebuilt on the new default layout.
- "FINAL SALE. UP TO 50% OFF" message kept.
- No Returns row, because final-sale items can't be returned.

---

## Feature-by-feature decisions

### 1. "Speak with an expert" link: switched off on all templates
Removed from the product information area on:
- assist-product
- collars-leashes
- nova-preorder
- pawtner-me
- pet-bowl
- pet-bundle
- pet-charms
- solitaire-product
- solitaire-promo
- vs-clipon
- wonder-rocks

On assist-product this also removes the Japanese and Korean versions, which opened live chat.

**Not changed:** the "Chat With Us" button on the gift with purchase template. It's one of the three GWP buttons awaiting confirmation above.

### 2. Tax message: tick line removed, kept in the Shipping dropdown
The standalone tax tick line under the purchase button is removed from every template that had it. Two different wordings were in use:
- "Tax and duties included" on assist-product, cord-promo-product, md-promo, solitaire-promo, the-future-rocks, vs-promo-product and zodiac-promo-product.
- "Tax included, duties calculated at checkout" on collars-leashes, golden-week, nova-preorder, pawtner-me, pet-bowl, pet-bundle, pet-charms, solitaire-product, vs-adjustable, vs-clipon and wonder-rocks.

Tax information stays in the **Shipping dropdown** as a "Tax" row reading "Tax included, duties calculated at checkout". This is the case today on the default product page, preorder and summer-sale. The other templates get the row when they move to the new default layout.

### 3. Made-to-order message: no change
When a variant is out of stock but can still be ordered, the default page shows "[Product] is made-to-order and will ship as soon as it is crafted."

This stays **hidden** on these templates, and will remain hidden when they move to the new default layout:
- collars-leashes
- pawtner-me
- pet-bundle
- pet-charms
- solitaire-product
- solitaire-promo
- vs-adjustable
- vs-clipon
- vs-promo-product
- wonder-rocks

### 4. Delivery estimate ("Ships between [dates]"): no change
The default product page shows an estimated shipping date range.

These templates stay **without** it, and will remain without it when they move to the new default layout:
- nova-preorder
- pet-charms
- solitaire-promo
- the-future-rocks
- vs-adjustable
- vs-clipon
- vs-promo-product
- wonder-rocks
- zodiac-promo-product

The gift with purchase template also has no delivery estimate, because its items can't be purchased.

### 5. Size guide link: no change
The default product page shows a Size Guide link under the product options.

These templates stay **without** it, and will remain without it when they move to the new default layout:
- collars-leashes
- pawtner-me
- pet-bowl
- pet-bundle
- pet-charms

The gift with purchase template also has no size guide.

### 6. Product options (Easify app): no change
The default product page includes the Easify product options block, which adds custom option fields.

These templates stay **without** it, and will remain without it when they move to the new default layout:
- collars-leashes
- cord-promo-product
- golden-week
- md-promo
- pawtner-me
- pet-bundle
- pet-charms
- the-future-rocks
- vs-adjustable
- vs-clipon
- vs-promo-product
- zodiac-promo-product

These templates keep it: assist-product, nova-preorder, pet-bowl, preorder, solitaire-product, solitaire-promo, summer-sale and wonder-rocks.

### 7. "Also available" products: no change
This list of related products is switched off on the default product page.

These templates **keep** it, and will keep it when they move to the new default layout:
- assist-product
- md-promo
- the-future-rocks
- zodiac-promo-product

### 8. Carat / gold weight disclaimer: no change
The note "Please note that the carat weight, gold weight, number of stones, and dimensions will vary…" shows below the dropdowns on every template **except pet-bowl** (ceramic pet bowl and Nova silk scarves). pet-bowl stays without it, including after it moves to the new default layout.

### 9. Promo messages: kept, moved below the price
These messages stay switched on, and will stay on when their templates move to the new default layout. On every template they now sit **directly below the price**, matching the summer-sale page. Previously they sat between the product name and the price.

| Message | Templates |
|---|---|
| "GET FREE LASER ENGRAVING." | pawtner-me, pet-bundle |
| "BUY 2 SAVE 15% \| BUY 3 SAVE 20% \| BUY 4 SAVE 30%. AUTOMATICALLY APPLIED AT CHECKOUT." | pet-charms |
| "FINAL SALE. UP TO 50% OFF. AUTOMATICALLY APPLIED AT CHECKOUT." | summer-sale |
| "FINAL SALE" | the-future-rocks, vs-adjustable, zodiac-promo-product |
| "MOTHER'S DAY 35% OFF. USE CODE: GIFT35" | solitaire-promo |

Languages:
- The Japanese site shows Japanese versions of these messages, except the summer-sale message, which is English only.
- The Korean site shows them in English.

### 10. Nova pre-order notes: kept, moved below the price
Both notes on the Nova pre-order template (Nova iPhone bumper case, Nova iWatch bangle) stay switched on. They now sit **directly below the price**, matching the promo messages above. Previously they sat between the product name and the price. They appear in this order:
1. "Pre-ordered products will arrive in mid-September."
2. "iWatch/Phone not included."

### 11. Assist-product: IGI certification and packaging image
- **IGI certification** now appears as a **"Certification" row in the Product Details dropdown**, as on the default product page. The separate boxed certification line above the purchase button is switched off.
- **Packaging image** (IGI certificate sleeve, The Future Rocks box and ring box) is kept.

### 12. Pet-bowl template assignment: no change
The three Nova silk scarves (Blue L, Green L, Green S) stay on the pet-bowl template alongside the Ceramic pet bowl.

### 13. Templates with no published products: all kept
These templates currently have no published products, but all are kept and will move to the new default layout with their agreed differences:
- assist-product
- cord-promo-product
- gwp
- md-promo
- preorder
- solitaire-product
- solitaire-promo
- the-future-rocks
- vs-adjustable
- vs-clipon
- vs-promo-product
- zodiac-promo-product

### 14. Switched-off content: kept saved
Old content that is switched off stays saved in the templates, hidden from customers. It can be restored in the theme editor at any time:
- **Old promos:** Christmas codes (XMAS20/XMAS30), raffia bag, water bottle, Mother's Day, Pet Day, VS free shipping, CORD25, Christmas pet bowl offer.
- **Old app blocks:** Klaviyo sign-up form, countdown timers, the old "Speak with an Expert" WhatsApp button.
- **Old layout:** the product page layout from before the redesign (accordions, boxed certification, tick lines, old size guide links).
- **Warranty and FSC-certified packaging copy:** stays unpublished.
- **Today's switch-offs:** the "Speak with an expert" links and the tax tick lines.

### 15. Clara curb-link products: no change
The Clara curb-link bracelet, earrings, necklace and ring point to a template named "Default product", which doesn't exist. They already display the default product page. No change.

### 16. Returns message: tick line removed, kept in the Shipping dropdown
The standalone "Easy 14-day return" tick line under the purchase button is removed from every template that had it: assist-product, collars-leashes, cord-promo-product, golden-week, md-promo, nova-preorder, pawtner-me, pet-bowl, pet-bundle, pet-charms, solitaire-product, solitaire-promo, vs-adjustable, vs-clipon, vs-promo-product, wonder-rocks and zodiac-promo-product.

Returns information stays in the **Shipping dropdown** as a "Returns" row reading "Easy 14-day returns":
- Today it appears on the default product page and preorder.
- The other templates get the row when they move to the new default layout.
- The final-sale templates, **summer-sale** and **the-future-rocks**, stay without a Returns row.

---

## What each template keeps after the rebuild

Every template will use the new default product page layout. The list below shows only what each one keeps that **differs from the default**.

| Template | Differences kept |
|---|---|
| assist-product | Packaging image; "Also available" products |
| collars-leashes | Made-to-order message hidden; no size guide; no product options |
| cord-promo-product | No product options |
| golden-week | No product options |
| gwp | No price, product options, purchase button or wishlist; no size guide; no delivery estimate; no Tax or Returns rows; Shop Jewelry / Shop Pet Collection / Chat With Us buttons (*awaiting confirmation*) |
| md-promo | No product options; "Also available" products |
| nova-preorder | "Pre-order" button; "Pre-ordered products will arrive in mid-September." and "iWatch/Phone not included." below the price; no delivery estimate |
| pawtner-me | "GET FREE LASER ENGRAVING." below the price; made-to-order message hidden; no size guide; no product options |
| pet-bowl | No size guide; no carat / gold weight disclaimer |
| pet-bundle | "GET FREE LASER ENGRAVING." below the price; made-to-order message hidden; no size guide; no product options |
| pet-charms | "BUY 2 SAVE 15%…" below the price; made-to-order message hidden; no delivery estimate; no size guide; no product options |
| preorder | "Pre-order" button; delivery estimate directly below the price |
| solitaire-product | Made-to-order message hidden |
| solitaire-promo | "MOTHER'S DAY 35% OFF. USE CODE: GIFT35" below the price; made-to-order message hidden; no delivery estimate |
| summer-sale | "FINAL SALE. UP TO 50% OFF…" below the price; no Returns row |
| the-future-rocks | "FINAL SALE" below the price; "Also available" products; no delivery estimate; no product options; no Returns row |
| vs-adjustable | "FINAL SALE" below the price; made-to-order message hidden; no delivery estimate; no product options |
| vs-clipon | Made-to-order message hidden; no delivery estimate; no product options |
| vs-promo-product | Made-to-order message hidden; no delivery estimate; no product options |
| wonder-rocks | Made-to-order message hidden; no delivery estimate |
| zodiac-promo-product | "FINAL SALE" below the price; "Also available" products; no delivery estimate; no product options |

Everything else changes to match the default:
- Certification, Tax, Returns and free shipping appear as rows in the dropdowns.
- The delivery estimate reads "Ships between".
- The "conscious practices" row is removed.
- The wishlist button is centred.
