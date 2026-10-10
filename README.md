# Nayi Samakhya Unified Platform (నాయి సమాఖ్య డిజిటల్ వేదిక)

Unified monorepo housing both the sovereign community advocacy portal and the pan-Telugu cultural matrimony initiative for the Nayi Brahmana community worldwide.

## Platform Architecture

```text
nayi-samakhya-unified/
├── apps/
│   ├── web/             # Official Community Portal (nayisamakhya.org)
│   └── matrimony/       # Pan-Telugu Matrimonial & Cultural Platform (nayisamakhya.org/matrimony)
└── package.json         # Unified Workspace Root
```

### 1. Main Community Web Portal (`apps/web`)
- **Domain**: `https://nayisamakhya.org`
- **Framework**: Next.js 16 + React 19 + Supabase + Tailwind CSS
- **Features**: Civic newsletters, mandal directory, legal representations, reels, community surveys, and grievance moderation.

### 2. Matrimony & Cultural Initiative (`apps/matrimony`)
- **Route**: `https://nayisamakhya.org/matrimony`
- **Framework**: Next.js 16 + React 19 + PostgreSQL (RLS) + Zod + Sharp
- **Features**:
  - Pan-Telugu geography (59 Sovereign Districts: 33 Telangana + 26 Andhra Pradesh)
  - Sacred Gotra & Menarikam Cultural Kinship Engine
  - Traditional Vedic Horoscope Chart & WhatsApp Kalyana Patrika
  - Village Elder & Community Endorsement System (*గ్రామ పెద్దల ధృవీకరణ పత్రం*)
  - Senior Voice Narration & Kalyana Rayabharam Concierge

## Production Cloudflare + Supabase Architecture

- **Domain & DNS**: `https://nayisamakhya.org` via Cloudflare Managed DNS + WAF + DDoS Mitigation
- **Relational Database**: Supabase PostgreSQL (Port 6543 connection pooler, DPDP AES-256 column encryption via `pgcrypto`)
- **Media Object Storage**: Cloudflare R2 (`nsm-profile-photos` bucket, S3-compatible, zero egress bandwidth costs)
- **Monorepo Sub-path Routing**: `nayisamakhya.org/` (Web Portal) & `nayisamakhya.org/matrimony` (Matrimony Platform)

## Development Commands

```bash
# Run Main Web Portal (nayisamakhya.org)
npm run dev:web

# Run Matrimony Portal (nayisamakhya.org/matrimony)
npm run dev:matrimony

# Run Matrimony Automated Test Suite
npm run test:matrimony
```
