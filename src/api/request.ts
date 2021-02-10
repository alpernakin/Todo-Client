const url = 'http://localhost:3000';

const toUri = (endpoint: string) => `${url}/${endpoint}`;

const upsert = (endpoint: string, method: 'PUT' | 'POST' | 'DELETE', params: any = null) =>
    fetch(toUri(endpoint), {
        method: method,
        body: params ? JSON.stringify(params) : undefined,
        headers: {
            'content-type': 'application/json',
        }
    });

async function pipe(request: Promise<Response>): Promise<any> {
    try {
        const response = await request;
        console.log(`Succesfully received from ${response.url}`);
        if (response.status === 204)
            return true;
        return await response.json();
    } catch (err) {
        console.error(`The server has failed to respond`);
        console.error(err);
        throw err;
    }
}

export async function get<T>(endpoint: string, params: any = null): Promise<T> {
    let uri = toUri(endpoint);
    if (params && Object.keys(params).length)
        uri += `?${new URLSearchParams(params)}`
    return pipe(fetch(uri, { method: 'GET' }));
}

export async function post<T>(endpoint: string, params: any = null): Promise<T> {
    return pipe(upsert(endpoint, 'POST', params));
}

export async function put<T>(endpoint: string, id: number | string, params: any = null): Promise<T> {
    return pipe(upsert(`${endpoint}/${id.toString()}`, 'PUT', params));
}

export async function remove<T>(endpoint: string, id: number | string): Promise<T> {
    return pipe(upsert(`${endpoint}/${id.toString()}`, 'DELETE'));
}