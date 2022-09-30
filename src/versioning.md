---
layout: base
title: Versioning

eleventyNavigation:
  parent: Home
  key: Versioning
---

# Updating the system and keeping different parts in sync

Rahvusarhiiv Design System uses [Semantic Versioning 2.0.0](https://semver.org/) for versioning the design system different parts.

Given a version number `MAJOR.MINOR.PATCH`, increment the:

- `MAJOR` version when you make incompatible API changes
- `MINOR` version when you add functionality in a backwards compatible manner
- `PATCH` version when you make backwards compatible bug fixes
- Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

---

## The parts that adhere to the versioning logic

- **Components and patterns** in the design system **code examples library** and **UI Design Kit** — this is for keeping in sync the Figma file and code examples. The version is marked on the documentation site and Figma file.
- The **full custom Tailwind CSS configuration file** `tailwindcss.conf.js` and **Figma styles in UI Design Kit** — this is for developers and designer to understand which version of the configuration/styles is in use. Also, the UI Design Kit and the configuration file versions and features should be matched. If there is change in the Figma file styles the configuration need to change and match the version or vice versa. Version is marked in the beginning of the configuration file and in Figma.
