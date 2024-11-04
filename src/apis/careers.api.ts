import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import {
    collection,
    getDocs,
    query,
    doc,
    getDoc
    // limit,
} from 'firebase/firestore';
import db from '~/firebaseConfig';
import { Career, CareerResponse } from '~/utils/types';

const careersApi = createApi({
    reducerPath: 'careersApi',
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        fetchCareersPaginated: builder.query<
            CareerResponse,
            {
                page: number;
                limit: number;
                name?: string;
                position?: string;
                address?: string;
            }
        >({
            async queryFn({ page, limit, name, position, address }) {
                try {
                    const careersCollection = collection(db, 'jobs');
                    let careersQuery = query(careersCollection);

                    const careersSnapshot = await getDocs(careersQuery);

                    const allCareers: Career[] = careersSnapshot.docs.map(
                        (doc) => {
                            const data = doc.data();
                            return {
                                id: doc.id,
                                ...data
                            } as Career;
                        }
                    );

                    let filteredCareers = allCareers;

                    if (name) {
                        filteredCareers = filteredCareers.filter((career) =>
                            career.name
                                .toLowerCase()
                                .includes(name.toLowerCase())
                        );
                    }

                    if (position) {
                        filteredCareers = filteredCareers.filter((career) =>
                            career.position
                                .toLowerCase()
                                .includes(position.toLowerCase())
                        );
                    }

                    if (address) {
                        filteredCareers = filteredCareers.filter((career) =>
                            career.address
                                .toLowerCase()
                                .includes(address.toLowerCase())
                        );
                    }

                    const start = (page - 1) * limit;
                    const end = start + limit;
                    const paginatedCareers = filteredCareers.slice(start, end);

                    console.log(paginatedCareers);
                    return {
                        data: {
                            careers: paginatedCareers,
                            total: filteredCareers.length
                        } as CareerResponse
                    };
                } catch (error) {
                    console.log(error);
                    return { error: { message: (error as Error).message } };
                }
            }
        }),
        fetchCareerById: builder.query<Career, string>({
            queryFn: async (id) => {
                try {
                    const careerDoc = doc(db, 'jobs', id);
                    const careerSnapshot = await getDoc(careerDoc);

                    if (careerSnapshot.exists()) {
                        const careerData = {
                            id: careerSnapshot.id,
                            ...careerSnapshot.data()
                        } as Career;

                        return { data: careerData };
                    } else {
                        return { error: { message: 'Job not found' } };
                    }
                } catch (error) {
                    return { error: { message: (error as Error).message } };
                }
            }
        })
    })
});

export const { useFetchCareersPaginatedQuery, useFetchCareerByIdQuery } =
    careersApi;

export default careersApi;
