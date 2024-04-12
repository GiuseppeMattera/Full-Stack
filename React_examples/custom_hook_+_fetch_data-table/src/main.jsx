import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)


// è stato installato tailwind 'npm install -D tailwindcss postcss autoprefixer' e 'npx tailwindcss init -p' 
// è stato aggiunto al config di tailwind il content sempre del link sopra
// è stato aggiunto a index.css '@tailwind base;
//                               @tailwind components;
//                               @tailwind utilities;'

