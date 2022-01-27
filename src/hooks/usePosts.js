import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    //useMemo- используется когда в callback производятся какие-то вычисления
    const sortedPosts = useMemo(() => {
        if (sort) {
            // метод sort мутирует объект по этому создаем копию
            //localeCompare-сравнивает значения
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])
    return sortedPosts
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(({title}) => title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts
}