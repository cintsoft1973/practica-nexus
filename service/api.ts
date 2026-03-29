const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log('API_URL:', API_URL);
export async function apiFetch<T = any>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });
    if (!response.ok) {
        throw new Error(`Error en la solicitud a sss ${endpoint}: ${response.status}`);
    }
    return response.json() as Promise<T>;
}