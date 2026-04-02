
    export type RemoteKeys = 'home/App';
    type PackageType<T> = T extends 'home/App' ? typeof import('home/App') :any;