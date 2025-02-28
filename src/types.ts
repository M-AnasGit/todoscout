export type Config = {
    patterns: {
        name: string;
        priority: 'LOW' | 'MEDIUM' | 'HIGH';
    }[];
    metadata: {
        name: string;
        prefix: string;
        seperator: string;
    }[];
    files: string[];
    ignore: string[];
};

export type ScanOptions = {
    dir: string;
};

export type Todos = {
    file: string;
    line: number;
    text: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH';
};
