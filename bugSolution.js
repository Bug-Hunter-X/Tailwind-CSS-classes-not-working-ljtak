```javascript
//In your main app.js file
import 'tailwindcss/tailwind.css';
import './styles.css'; //Added this line

//your app jsx code
```

```css
/* styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```javascript
//In your component's jsx file
<div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
    <p>Hover over me!</p>
</div>
```