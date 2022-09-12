export type User = {
    email: string;
    firstName?: string;
    lastName?: string;
    initialWeight?: number;
    height?: number;
    gender?: 'M' | 'F';
    onboarded: boolean;
}