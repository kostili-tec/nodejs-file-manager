import { store } from '../store.js';

export const updatePath = (newPath) => (store.currentPath = newPath);
