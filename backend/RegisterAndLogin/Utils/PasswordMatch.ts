import bcrypt from "bcryptjs";

export async function PasswordMatch(formPassword: string, hashedPassword: string) {
    try {
        const isMatch = await bcrypt.compare(formPassword, hashedPassword);
        return isMatch;
    }
    catch (error) {
        console.error("Error:", error);
    }

}