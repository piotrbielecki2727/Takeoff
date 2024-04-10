import bcrypt from "bcryptjs";

export async function HashPassword(userPassword: string) {
    try {
        const hashedPassword = await bcrypt.hash(userPassword, 10);
        return hashedPassword;

    }
    catch (error) {
        console.error("Error:", error);
    }
    
}