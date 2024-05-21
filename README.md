# Care Scribe

Care Scribe is an alpha plugin for React Plugs for Care. This package provides two React components: `NavItem` and `Scribe`.

## Installation

To install Care Scribe, run:

```bash
npm install @yourusername/care-scribe
```

## Usage

Import and use the components in your React application:

```tsx
import React from 'react';
import { NavItem, Scribe } from '@yourusername/care-scribe';

const App: React.FC = () => {
  return (
    <div>
      <NavItem label="Home" href="/" />
      <Scribe text="This is a scribe component" />
    </div>
  );
};

export default App;
```

## Components

### NavItem

A navigation item component.

**Props:**
- `label`: The text to display.
- `href`: The URL to link to.

### Scribe

A component to display text in a styled container.

**Props:**
- `text`: The text to display.

## License

MIT License. See LICENSE file for details.

