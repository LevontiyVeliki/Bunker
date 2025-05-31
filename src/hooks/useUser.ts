import { useState } from 'react';
import { TUser } from '../utils/types';

export const useUser = (initialCard: TUser) => {
    const [user, setUser] = useState<TUser>(initialCard)

    const updateField = (field: keyof TUser, value: string) => {
        setUser((prev) => ({ ...prev, [field]: value }));
    };

    return {user, updateField}
};