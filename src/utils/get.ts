import Axios from "axios";
import * as cheerio from "cheerio";

/** Functions */
import { YahooError } from "../error";

/** Types */
import {
    getResult,
    resData
} from "../types/yahooNews";

/**
 * Scrape Yahoo News XML
 * @param category - category selection.
 * @returns {Promise<object>} results.
 */
export async function get(category: string): Promise<getResult> {
    return new Promise(async (resolve) => {

        const categories = [
            "world", "domestic", "business", "it",  "entertainment",
            "sports", "science", "life", "local", "ddelRows"
        ];

        if (!categories.includes(category))
            throw new YahooError("category is invalid.");

        const url = `https://news.yahoo.co.jp/rss/categories/${category}.xml`;

        try {

            const res = await Axios({
                method: "GET",
                url: url
            });

            if (res.status !== 200) {
                return resolve({
                    status: "error",
                    message: res.statusText
                });
            }

            const resData: resData[] = [];
            const $ = cheerio.load(res.data, { xmlMode: true });

            $("item").each((_, element) => {
                const title = $(element).find("title").text();
                const link = $(element).find("link").text();
                const pubDate = $(element).find("pubDate").text();
                const image = $(element).find("image").text();
                const comments = $(element).find("comments").text();
                const description = $(element).find("description").text();
                resData.push({
                    title: title,
                    link: link,
                    pubDate: pubDate,
                    image: image,
                    comments: comments,
                    description: description
                });
            });

            resolve({
                status: "success",
                resData: resData
            });
        } catch (e) {
            if (e instanceof Error) {
                return resolve({
                    status: "error",
                    message: e.message
                });
            }
        }
    });
};