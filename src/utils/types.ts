export interface Blog {
    id: string;
    author: string;
    image: string;
    tags: string[];
    title: string;
    content: string;
    postedDate: string;
}

export type BlogResponse = {
    blogs: Blog[];
    total: number;
};

export interface Career {
    id: string;
    name: string;
    position: string;
    image: string;
    number: string;
    level: string;
    address: string;
    location: string;
    nedds: string[];
    interest: string[];
    jobDescription: string[];
    postedDate: string;
}

export type CareerResponse = {
    careers: Career[];
    total: number;
};
