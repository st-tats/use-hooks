interface UseCookieOptions<T> {
    serialize?: (value: T) => string;
    parse?: (value: string) => T;
    expiresDays?: number;
}
declare function useCookie<T>(key: string, initialValue: T | (() => T), options?: UseCookieOptions<T>): [T, (value: T | null) => void];

export { useCookie };
