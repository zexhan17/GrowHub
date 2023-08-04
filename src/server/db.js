import PocketBase from 'pocketbase';
import { PUBLIC_PB } from '$env/static/public';
export const pb = new PocketBase(PUBLIC_PB);
