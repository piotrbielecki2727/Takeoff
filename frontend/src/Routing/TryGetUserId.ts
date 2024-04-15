import { parseToken } from '../Utils/AuthUtils';

function TryGetUserId(): string | null {
    try {
        const data = parseToken()
        return data.userId;
    } catch (error) {
        return null;
    }
}

export default TryGetUserId;