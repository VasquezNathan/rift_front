import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  console.log(mode);

  if (mode === 'development') {
    var API_URL = "http://localhost:5000/";
  }
  else {
    var API_URL = "https://api.natevasquez.com/";
  }

  return {
    plugins: [react()],
    define: {
      "import.meta.env.API_URL": JSON.stringify(API_URL),

    }
  }
})
