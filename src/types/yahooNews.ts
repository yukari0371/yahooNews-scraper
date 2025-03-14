export type getResult =
| {
    status: "success";
    resData: resData[];
} | {
    status: "error";
    message: string;
};

export type resData = {
    title: string;
    link: string;
    pubDate: string;
    image: string;
    comments: string;
    description: string;
};