import type { PackageDetails } from '../types/packageDetails.ts';

export async function GetPackage(name: string): Promise<PackageDetails> {
    const res = await fetch(`https://registry.npmjs.org/packages/${name}`)
    const data = await res.json();

    return data as PackageDetails;
}

