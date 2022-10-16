export const getEnvVariables = () => {
    return {
        VITE_FIREBASE_API_KEY: import.meta.env.VITE_FIREBASE_API_KEY
    }
}