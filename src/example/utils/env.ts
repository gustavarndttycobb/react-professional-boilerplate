const env = {
    API_URL: import.meta.env.VITE_API_URL ?? '',
    MOCKS_ENABLED: import.meta.env.VITE_MOCK_FLAG === "true",
};

export default env;