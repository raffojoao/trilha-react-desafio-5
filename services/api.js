import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xdlrwtzpzpdfwgowwuur.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkbHJ3dHpwenBkZndnb3d3dXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzgwMTIsImV4cCI6MjAwOTQxNDAxMn0.Adsf_bhbHF52tqVJmH6nKsvF6L1EepXDbvgIM8hmcRg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkbHJ3dHpwenBkZndnb3d3dXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM4MzgwMTIsImV4cCI6MjAwOTQxNDAxMn0.Adsf_bhbHF52tqVJmH6nKsvF6L1EepXDbvgIM8hmcRg"
    }
})