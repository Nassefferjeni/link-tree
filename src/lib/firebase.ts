import { initializeApp } from 'firebase/app'
import { doc, getFirestore, onSnapshot } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { derived, writable } from 'svelte/store'
import type { User } from 'firebase/auth/cordova'
import type { Readable } from 'svelte/motion'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyChVf9GlD3uFTjktwpatMAekuTUWC3WWek',
    authDomain: 'link-tree-7aeab.firebaseapp.com',
    projectId: 'link-tree-7aeab',
    storageBucket: 'link-tree-7aeab.appspot.com',
    messagingSenderId: '584546060133',
    appId: '1:584546060133:web:f7fb7f3a8d22b9a416038c',
    measurementId: 'G-G2KVH4JG4B',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void

    if (!auth || !globalThis.window) {
        console.warn('Auth is not intialized or not in browser')
        const { subscribe } = writable<User | null>(null)

        return {
            subscribe,
        }
    }

    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user)
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
    }
}

export const user = userStore();

export function docStore<T>(path: string) {
    let unsubscribe: () => void;

    const docRef = doc(db, path);

    const { subscribe } = writable<T | null>(null, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set((snapshot.data() as T) ?? null);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
        ref: docRef,
        id: docRef.id
    };
}

interface UserData {
    username: string;
    bio: string;
    photoURL: string;
    links: any[];
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
    if ($user) {
        return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    }
    else {
        set(null);
    }
});
