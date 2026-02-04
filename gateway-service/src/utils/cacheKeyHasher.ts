import crypto from 'crypto';

/**
 * Generates a consistent MD5 hash for a given string.
 * MD5 is chosen for speed and short key length (32 chars).
 * * @param {string} input - The raw string (e.g. "GET www.hash.com...")
 * @returns {string} - The hex hash
 */
export function cachekeyhash(input:string) {
    return crypto.createHash('md5').update(input).digest('hex');
}

/**
 * Advanced Version:
 * Parses the URL and sorts query parameters alphabetically.
 * This ensures "a=1&b=2" and "b=2&a=1" generate the SAME hash.
 * * @param {string} method - HTTP Method (GET, POST, etc.)
 * @param {string} urlString - The raw URL
 */

export function generateNormalizedHash(method:string, urlString:string) {
    // Ensure url has a protocol for parsing, otherwise new URL() might fail
    const parseableUrl = urlString.startsWith('http') 
        ? urlString 
        : `http://${urlString}`;

    const urlObj = new URL(parseableUrl);
    
    // Sort the query parameters
    urlObj.searchParams.sort();

    // Reconstruct the unique string
    // Structure: METHOD:HOST:PATH:SORTED_QUERY
    const baseString = `${method.toUpperCase()}:${urlObj.hostname}:${urlObj.pathname}:${urlObj.searchParams.toString()}`;

    return cachekeyhash(baseString);
}

 