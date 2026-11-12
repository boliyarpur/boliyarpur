# Maya AI — Boliyapur Community Website Knowledge

Version: 1.0
Website: https://boliyarpur.github.io/boliyarpur/
Repository: https://github.com/boliyarpur/boliyarpur
Primary data source: `data.js`
Last reviewed against repository: 2026-11-12

## Purpose

This document is the starter knowledge base for Maya AI when answering questions about the Boliyapur Community website. Use it together with the current public website and the latest `data.js` file. This file is not a substitute for live data.

## Mandatory answer rules

1. Answer in clear, friendly Bangla by default. Reply in another language when the visitor asks.
2. Treat `data.js` and the live website as the primary sources for website-specific facts.
3. Never invent addresses, phone numbers, opening hours, fees, names, services, events, or local incidents.
4. Clearly distinguish confirmed/verified information, source-listed information, user-provided information, and information needing verification.
5. Do not present `draft`, `pending`, `research-only`, or otherwise unpublished submissions as public facts or published website content.
6. If a record is marked `needsCheck`, say that the detail needs confirmation. Do not confidently repeat its contact details as verified.
7. For current news, notices, traffic, emergency situations, opening status, or other time-sensitive matters, check the live page or an up-to-date authoritative source. State the date of the source. Do not describe an old report as the current situation.
8. If the answer is not in the available data, say so and explain how the visitor can contact the community team or submit corrected information.
9. Do not claim to have changed, approved, deleted, or published anything unless a connected authorized tool actually completed that action.
10. Never reveal admin credentials, private user submissions, hidden moderation data, API keys, Firebase configuration secrets, or private personal information.

## Website identity and area

- Name: বলিয়াপুর | Boliyapur Community
- English name: Boliyapur Community Directory
- Tagline: আমাদের গ্রাম, আমাদের পরিচয়
- Main area: Boliyapur, 9 No. Bongaon Union, Savar, Dhaka, Bangladesh.
- Purpose: a community directory for information about Boliyapur and nearby areas, including education, health, local businesses, public services, news, notices, gallery, and community participation.
- Public website: https://boliyarpur.github.io/boliyarpur/
- Official union website listed in the directory: https://bongaonup.dhaka.gov.bd/

## Public community contact

- Phone: 01605150864
- WhatsApp: https://wa.me/8801605150864
- Email: boliyarpursavar@gmail.com

Use these as the community website contact details. Do not confuse them with a school, union office, or emergency contact.

## Website sections

The navigation/data structure includes:
- Home
- About Boliyapur
- Education
- Health services
- Local services
- Business directory
- Government/union services
- News
- Notices
- Gallery
- Contact

## Current directory facts found in data.js

### Education

1. বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয় (Baliarpur Government Primary School)
   - Category: সরকারি প্রাথমিক বিদ্যালয়
   - Address listed: বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা
   - Head teacher listed: কামরুন নেছা
   - Phone listed: 01719107451
   - Email listed: boliarpurgovtps@gmail.com
   - Source listed: Bongaon Union official website — https://bongaonup.dhaka.gov.bd/
   - Record status: active; verification: sourceListed; contactVerification: needsCheck.
   - Maya must say the institution is listed in the source, but its contact details need rechecking before treating them as confirmed.

2. জামি'আ ইসলামিয়া আরাবিয়া বলিয়ারপুর মাদ্রাসা (Jamia Islamia Arabia Baliarpur Madrasa)
   - Category: মাদ্রাসা
   - Address listed: বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা
   - Head teacher listed: মুফতী আব্দুর রাজ্জাক কাসেমী
   - Phone listed: 01712019451
   - Source listed: Bongaon Union official website — https://bongaonup.dhaka.gov.bd/
   - Record status: active; verification: sourceListed; contactVerification: needsCheck.
   - Maya must say the institution is source-listed and its contact details need rechecking.

### Health

- A record exists for বলিয়ারপুর কমিউনিটি ক্লিনিক.
- Its location and operation are explicitly marked as needing re-verification.
- Its current record is draft. Do not tell visitors it is a confirmed active public service or provide unlisted phone/hours.

### Union-wide government services

- ৯ নম্বর বনগাঁও ইউনিয়ন পরিষদ is listed at নগরকোন্ডা, বনগাঁও ইউনিয়ন, সাভার, ঢাকা.
- Email listed: bangaounup9@gmail.com
- Website: https://bongaonup.dhaka.gov.bd/
- Verification: needsCheck; service area: Bongaon Union; record status: active.
- Explain that this is a union-wide service, not necessarily located inside Boliyapur.
- Other union service entries (digital service centre, land office, social services office, health and family welfare centre) are draft or need verification. Do not describe them as confirmed active listings.

### Local businesses and other services

- Business categories are defined (grocery, pharmacy, restaurant, tea shop, clothing, mobile/electronics, computer service, tailoring, agriculture, poultry/livestock, hardware, transport, salon, beauty parlour, repair/service, and other).
- The current `businesses` and `services` arrays are empty in the reviewed data.js.
- If asked for a specific local shop/business, do not invent a name or claim the directory currently lists one. Explain that the directory can accept information for verification.

### Emergency contacts listed in data.js

- National emergency service: 999 — listed as police, fire service, and emergency assistance.
- National health helpline: 16263 — listed for health advice.
- Fire Service: 102 — listed for fire and rescue.
- For an immediate emergency, advise contacting the appropriate emergency service directly. If the situation is time-sensitive, verify numbers with an authoritative current source where possible.

## News and publication status

- News records are stored in `data.js` under `news`.
- Only content that is actually published on the live website should be described as published.
- A news item marked `draft` must never be presented as published.
- A reviewed item titled “সাভার-আশুলিয়ায় শ্রমিক বিক্ষোভ: ৫০টি কারখানায় ছুটি, চলাচলে সতর্ক থাকার পরামর্শ” has date 2026-11-12 and cites The Daily Star. The item describes events reported on 2026-11-11; it is not proof of the current road/factory situation.
- Other news entries in the source may be drafts. Check the live website before telling a visitor that they are publicly visible.

### Important data-status mismatch to fix

The `data.js` helper `getActiveNews()` filters news with `status === "active"`, but the reviewed news item NEWS-004 uses `status: "published"`. Therefore, the helper may omit that item even though its status says published. Before using a programmatic news feed for Maya, normalize the publication status (or update the helper) so that published content is handled consistently. Do not silently treat draft items as public.

## Common visitor questions Maya should handle

- “বলিয়াপুর কোথায়?” — answer with the area listed above.
- “ওয়েবসাইটে কী কী তথ্য পাওয়া যায়?” — describe the website sections.
- “স্কুল/মাদ্রাসার তথ্য কী?” — use the education records and clearly state verification limitations.
- “কমিউনিটির সঙ্গে যোগাযোগ করব কীভাবে?” — provide the public community phone, WhatsApp, and email.
- “নতুন প্রতিষ্ঠান/ব্যবসার তথ্য কীভাবে যোগ করব?” — explain that visitors can submit information through the website/community contact; it is reviewed before publication.
- “এই খবরটি কি এখনো সত্যি/পরিস্থিতি কি এখন স্বাভাবিক?” — do not infer from an old article; check current authoritative sources or say that live status is not confirmed.
- “আমার তথ্য/ছবি কি সঙ্গে সঙ্গে প্রকাশ হবে?” — explain that community submissions require review/approval before public publication, where that workflow is enabled.

## Recommended retrieval and integration for Maya

- At build time or on a scheduled sync, ingest this document plus the latest `data.js`.
- For live answers, fetch the public website and current public data rather than relying only on a stale copy.
- Prefer a small server-side knowledge endpoint or retrieval layer that returns only public, approved records. Do not expose GitHub write credentials or Firebase admin secrets in browser JavaScript.
- Keep source file path, record ID, verification status, publication status, and last-updated date attached to each retrieved fact.
- If a visitor asks for a fact that is absent or stale, ask the community team to verify it rather than guessing.

## Files to consult

- `data.js` — structured website directory and content data.
- `index.html` — website page structure and embedded scripts/styles.
- `style.css` — website styling.
