type PropsAreEqual<P> = (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean;
/**
 * Wrapper per React.memo che preserva i tipi generici
 */
export declare function withMemo<T extends React.ComponentType<any>>(Component: T, propsAreEqual?: PropsAreEqual<React.ComponentProps<T>>): T;
export {};
