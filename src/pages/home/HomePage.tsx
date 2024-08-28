import {useLoaderData} from "react-router-dom";
import type { HomeLoaderResult } from './homeLoader'

function HomePage() {
    const { featuredPackages } = useLoaderData() as HomeLoaderResult;

    console.log(featuredPackages);

    return (
        <div>HomePage</div>
    );
}

export default HomePage;