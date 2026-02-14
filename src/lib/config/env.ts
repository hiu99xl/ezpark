type EnvConfig = {
  NODE_ENV: 'development' | 'production';
  NEXT_PUBLIC_API_URL?: string;
};

const getEnvVar = (key: keyof EnvConfig, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }

  return value;
};

const getOptionalEnvVar = (key: keyof EnvConfig): string | undefined => {
  return process.env[key];
};

function getApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_API_URL;
  if (!url || typeof url !== 'string') return '';
  return url.replace(/\/$/, '');
}

export { getEnvVar, getOptionalEnvVar, getApiBaseUrl };