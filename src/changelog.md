---
layout: base
title: Changelog
relative: ".."

eleventyNavigation:
  parent: Home
  key: Changelog
---

The design system changelog is important for recording a history of deprecations, removals, and any breaking changes in your system. **Document only the noteworthy difference** not every documentation site or source code update.

Rahvusarhiiv adheres to simple [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) way of maintaining changelog. Also read about [Versioning](/versioning).

Template:

```md
## [1.0.0] - 2022-10-18

### Added

-
-

### Changed

-
-

### Removed

-
-
```

---

# Changelog

## [Unreleased]

### Changed

- Moved Tailwind configuration into a separate preset file `rahvusarhiiv.preset.js`
- Updated colors: simplify grays
- Removed semantic color naming logic
- Merged color objects in configuration
- Rename font family `display` to semantically more correct `heading`

### Fixed

- Add correct heading font for Prose

### Removed

- Removed `shadow-sm`
