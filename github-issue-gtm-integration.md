# User Story

**Title**: Integrate Google Tag Manager for Analytics Tracking

As a **website owner**
I want **Google Tag Manager to be integrated across all pages of the resume-scroll application**
So that **I can track user behavior, page views, and engagement metrics to understand how visitors interact with my portfolio**

## Context
- Links: [Google Tag Manager Documentation](https://developers.google.com/tag-manager/quickstart)
- Non-functional requirements: 
  - GTM script must load on all pages without impacting performance
  - Must be GDPR compliant and respect user privacy
  - Should not block page rendering
  - Must work with Next.js App Router architecture

## Acceptance Criteria

### Scenario 1: GTM Loads on All Pages
Given I have a valid GTM container ID
When a user visits any page in the application (/, /me, /career, /intro, /design, /timeline)
Then the GTM script should load successfully
And the GTM dataLayer should be initialized
And I should be able to see page view events in Google Analytics

### Scenario 2: GTM Script Performance
Given GTM is integrated into the application
When a user loads any page
Then the GTM script should load asynchronously
And page load performance should not be degraded by more than 100ms
And the script should not block critical rendering path

### Scenario 3: Environment Configuration
Given I have different GTM container IDs for development and production
When the application runs in development mode
Then it should use the development GTM container ID (or no GTM)
And when the application runs in production
Then it should use the production GTM container ID

### Scenario 4: Privacy Compliance
Given GTM is integrated
When a user visits the site
Then GTM should respect browser Do Not Track settings
And should provide a way to opt-out of tracking if required
And should not track personal information without consent

## Technical Implementation Notes
- Add GTM script to Next.js `layout.tsx` or `_document.tsx`
- Use environment variables for GTM container ID
- Implement GTM using Next.js Script component for optimal loading
- Consider using `next/script` with `strategy="afterInteractive"`
- Add TypeScript definitions for GTM dataLayer

## Definition of Done
- [ ] GTM script loads on all pages in the application
- [ ] Environment variables configured for GTM container ID
- [ ] GTM integration tested in both development and production environments
- [ ] Page load performance impact measured and documented
- [ ] GTM dataLayer properly initialized and accessible
- [ ] Documentation updated with GTM setup instructions
- [ ] Privacy considerations addressed and documented

## INVEST Criteria Assessment
- **Independent**: Does not depend on other stories ✅
- **Negotiable**: GTM container ID and specific tracking events can be discussed ✅
- **Valuable**: Enables analytics tracking for portfolio optimization ✅
- **Estimable**: Clear technical implementation with known patterns ✅
- **Small**: Can be completed in 1-2 days ✅
- **Testable**: Clear acceptance criteria with verifiable outcomes ✅

## Labels
- `enhancement`
- `analytics`
- `technical-task`
- `ready-for-development`

## Estimated Effort
**Story Points**: 3
**Time Estimate**: 1-2 days
