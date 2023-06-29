import { storeCsv } from "../reducers/authreducers";
import { store } from "../store"
import Papa from 'papaparse';
const { dispatch } = store;

export const parseCSV = (csvContent) => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvContent, {
            complete: (results) => {
                resolve(results.data);
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export const convertToCSV = (data) => {
    const csv = Papa.unparse(data, { header: false });
    console.log("csvContent", csv)
    return csv;
};

export const CSVData = async (data) => {
    try {
        const parsedData = await parseCSV(data);

        const processedData = parsedData.map((row, index) => {
            const [id, amount, dueDate] = row;
            if (index == 0) {
                var sellingPrice = "sellingPrice"
                return {
                    id,
                    amount,
                    dueDate,
                    sellingPrice
                };

            } else {
                const currentDate = new Date();
                const dueDateTime = new Date(dueDate);
                const daysDifference = Math.floor((currentDate - dueDateTime) / (1000 * 60 * 60 * 24));

                let coefficient;
                if (daysDifference > 30) {
                    coefficient = 0.5;
                } else {
                    coefficient = 0.3;
                }

                const sellingPrice = amount * coefficient;

                return {
                    id,
                    amount,
                    dueDate,
                    sellingPrice
                };
            }

        });
        // console.log(processedData, "processedData")
        const csvContent = convertToCSV(processedData);
        // console.log(csvContent, "csvContent")
        dispatch(storeCsv(csvContent))
    } catch (error) {
        console.log(error, "error")
        dispatch(storeCsv("Error occured in Data processing"))
    }
}