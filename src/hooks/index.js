import { useEffect, useState } from "react";
import { getPeople } from "../api";


const _getPeople = async ({ persons, setPersons, page, setLoading, setAllPagesLoaded }) => {
    setLoading(true)
    const result = (await getPeople({ page })).results;
    setLoading(false)

    if(!result) return setAllPagesLoaded(true)

    const parsedResult = result.map((person) => ({
        ...person,
        id: person.url.split("/")[5],
    }));

    setPersons([...persons, ...parsedResult].filter(onlyUnique));
};

const onlyUnique = (value, index, self) => self.indexOf(value) === index;

export const usePersonList = () => {
    const [allPagesLoaded, setAllPagesLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fetchedPages, setFetchedPages] = useState([])
    const [persons, setPersons] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        if(!fetchedPages.includes(page)) { // If we have not yet fetched this page #
            _getPeople({ persons, setPersons, page, setLoading, setAllPagesLoaded });
            setFetchedPages(fetchedPages.concat(page))
        } 
    }, [fetchedPages, page, persons]);

    return { 
        getMore: () => setPage(_nextPage(page)), 
        persons,
        loading,
        allPagesLoaded
    }
}

const _nextPage = (page) => page + 1