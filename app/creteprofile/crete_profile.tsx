// createProfile.ts

// createProfile.ts
export default function createProfile(): { name: string; email: string; bio: string; createdAt: string } {
    return {
        name: '',
        email: '',
        bio: '',
        createdAt: new Date().toISOString(),
    };
}