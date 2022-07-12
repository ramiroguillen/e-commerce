import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import db from '../service/firebase';
import { useState, useCallback } from 'react';

const useFireStore = () => {

    const [load, setLoad] = useState();

    const [products, setProducts] = useState([]);

    const getData = useCallback(async () => {
        setLoad(true);
        try {
            const itemsCollection = collection(db, 'items');
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() });
            setProducts(result);
            setLoad(false);
        } catch (error) {
            alert(error);
            setLoad(false);
        };
    }, []);

    const [selectedItem, setSelectedItem] = useState({});

    const getSelected = async ({ id }) => {
        setLoad(true);
        try {
            const document = doc(db, 'items', id);
            const response = await getDoc(document);
            const result = { id: response.id, ...response.data() };
            setSelectedItem(result);
            setLoad(false);
        } catch (error) {
            alert(error);
            setLoad(false);
        }
    }

    const generateOrder = async ({ data }) => {
        setLoad(true);
        try {
            const col = collection(db, 'orders');
            const order = await addDoc(col, data);
            setLoad(false);
            alert('Su pedido ya fue realizado, el id de su pedido es: ' + order.id + '. Muchas gracias!');

        } catch (error) {
            alert(error);
            setLoad(false);
        }
    }

    return {
        getData,
        getSelected,
        products,
        load,
        selectedItem,
        generateOrder
    }
}

export default useFireStore