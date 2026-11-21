# portfolio
Meghulo's World
# সুকেশ খীসা — Portfolio

মিনিমাল পোর্টফোলিও সাইট। একই সোর্স থেকে মানুষ ও এআই — দুটো ভিউ।

## ফাইল

| ফাইল | কাজ |
|---|---|
| `index.html` | মানব + এআই SPA |
| `ai.html` | এআই-এর জন্য স্ট্যাটিক semantic পেজ (admin প্যানেল অটো আপডেট করে) |
| `admin.html` | এডিটর ও পাবলিশ প্যানেল (`/admin` রুট) |
| `content.json` | সব কনটেন্ট এখানে |
| `agent.json` | মেশিন প্রোফাইল (schema: portfolio-agent/1) |
| `llms.txt` | LLM-এর জন্য সারাংশ |
| `robots.txt`, `sitemap.xml` | SEO |

## GitHub Pages এ ডিপ্লয়

1. নতুন GitHub repo বানান, এই ফাইলগুলো push করুন (`main` branch)।
2. Settings → Pages → Source: **Deploy from a branch** → Branch: `main` / root → Save.
3. ১–২ মিনিটে `https://<username>.github.io/<repo>/` লাইভ।
4. `sitemap.xml`, `robots.txt`, `index.html`-এর `<link rel="canonical">`-এ `REPLACE_DOMAIN` আপনার ডোমেইনে বদলান।

## Netlify এ ডিপ্লয়

1. Netlify → **Add new site → Import from Git** → GitHub repo বেছে নিন।
2. Build command: খালি। Publish directory: `.` (`netlify.toml`-এ সেট করা আছে)।
3. Deploy।
4. `REPLACE_DOMAIN` গুলো নিজের ডোমেইনে বদলে আবার deploy করুন।

## এডমিন প্যানেল (`/admin.html`)

- GitHub fine-grained personal access token বানান:
  Settings → Developer settings → **Fine-grained tokens** → Generate new.
  - Repository access: শুধু এই repo।
  - Permissions → Repository permissions → **Contents: Read and write**।
- `/admin.html` খুলুন → "সংযোগ সেটিং"-এ repo (`username/repo`), branch (`main`), token দিন।
- তথ্য শুধু আপনার ব্রাউজারে (localStorage) থাকে।
- "প্রকাশ করুন" চাপলে GitHub API দিয়ে `content.json`, `agent.json`, `llms.txt`, `ai.html` এবং নতুন আপলোড হওয়া ছবি/ফাইল একসাথে commit হয়।
- GitHub Pages / Netlify ১–২ মিনিটে নতুন কনটেন্ট দেখাবে।

## WordPress/paid-এ migrate

- প্রতিটি `sections[i]` একটি পেজ/পোস্ট; `items` তার ভেতরের ব্লক।
- `content.json` থেকে যেকোনো CMS-এ ইমপোর্ট করা সহজ (standalone JSON)।
- কোনো ফ্রেমওয়ার্ক/বিল্ড স্টেপ নেই — শুধু স্ট্যাটিক ফাইল।
