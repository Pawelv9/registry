import type {Params} from 'react-router-dom';
import {getPackage} from '../../api/queries/getPackage.ts';

interface LoaderArgs {
    params: Params;
}

export async function detailsLoader({ params }: LoaderArgs){
   const {name} = params;

   if (!name) {
       throw new Error('No name provided');
   }

    const details = await getPackage(name);

    return {
        details
    }
}