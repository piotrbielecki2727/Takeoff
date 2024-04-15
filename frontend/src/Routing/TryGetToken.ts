import { getToken } from '../Utils/AuthUtils';

function TryGetToken(): string | null {
    try {
        const token = getToken()
        return token;
    } catch (error) {
        return null;
    }
}

export default TryGetToken;