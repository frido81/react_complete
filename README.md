npm create vite@latest dynamic_styles -- --template react

## Nice

### Ternary short form

```jsx
            <h2>Welcome {enteredPlayerName ? enteredPlyaerName 'unknown entity'}</h2>
            <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
```

### deploy to path instead of full domain

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/workout-refs',
    plugins: [react()],
});
```

### npm create

npm create vite@latest react-rnd -- --template react
