import { FETCH_JOBS } from './types';

export const fetchJobs = () => dispatch => {
        fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=&location=remote')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_JOBS,
            payload: data,
        }))
}