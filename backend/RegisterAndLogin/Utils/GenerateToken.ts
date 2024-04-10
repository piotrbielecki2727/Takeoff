import jwt from "jsonwebtoken";

export function GenerateToken(userId: string, isAdmin: boolean): string {
    const payload = {
        userId: userId,
        isAdmin: isAdmin
    };

    return jwt.sign(payload, 'superSecretPrivateKey', { expiresIn: '1h' });
}
