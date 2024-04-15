import { getRole } from '../Utils/AuthUtils';

function TryGetRole(): string | null {
    try {
        const role = getRole()
        return role;
    } catch (error) {
        return null;
    }
}

export default TryGetRole;