# CLAUDE.md

## Purpose

This document defines engineering standards and workflow for this project.

Read this file before performing any task.

---

## Working Style

* Work autonomously.
* Prefer implementation over explanation.
* Make reasonable engineering decisions without asking for confirmation unless requirements are ambiguous or a destructive action is required.
* Produce concise progress updates only when appropriate.

---

## Planning

Before implementation:

1. Understand the task.
2. Inspect the current project.
3. Create a short implementation plan.
4. Begin implementation immediately.

Avoid lengthy planning documents.

---

## Protected Assets

Never delete, rename or overwrite without explicit permission:

* `.claude/**`
* `Ejaz_Ahamed_Shaik_Resume.docx`
* User-created assets and content

Assume all existing files are intentional.

---

## Engineering Principles

Always follow:

* SOLID
* DRY
* KISS
* Separation of Concerns
* Composition over inheritance
* Progressive enhancement
* Reusability
* Scalability
* Maintainability

---

## Architecture

Prefer:

* Feature-based organization
* Small reusable components
* Shared UI primitives
* Reusable hooks
* Utility functions
* Clear folder structure

Avoid monolithic files.

---

## Code Standards

Use:

* TypeScript
* Strict typing
* Functional React components
* Descriptive naming
* Small focused functions

Avoid:

* any
* duplicated logic
* dead code
* unnecessary abstractions

---

## Styling

Use:

* Tailwind CSS
* Design tokens
* Responsive utilities
* Consistent spacing
* Consistent typography

Avoid inline styles unless unavoidable.

---

## Responsiveness

Always build mobile-first.

Every screen must work beautifully on:

* Mobile
* Tablet
* Laptop
* Desktop
* Ultra-wide displays

Never treat desktop as the primary layout.

---

## Performance

Prefer:

* Server Components
* Lazy loading
* Dynamic imports where appropriate
* Optimized images
* Minimal client-side JavaScript

---

## Accessibility

Always:

* Use semantic HTML.
* Support keyboard navigation.
* Provide accessible labels.
* Maintain proper color contrast.

---

## Error Handling

When something fails:

1. Determine the root cause.
2. Fix the cause.
3. Retry.

Avoid trial-and-error debugging.

Do not install unnecessary packages.

---

## Token Usage

Keep responses concise.

Do not:

* repeat requirements
* explain obvious implementation
* generate verbose reasoning

Spend tokens on code quality rather than explanations.

---

## Quality Gate

Before considering any task complete:

* Application builds successfully.
* No TypeScript errors.
* No lint errors.
* No unused imports.
* No dead code.
* Responsive on all breakpoints.
* Accessible.
* Production ready.
