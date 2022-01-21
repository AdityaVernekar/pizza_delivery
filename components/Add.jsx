
import axios from 'axios';
import React, { useState } from 'react';

function Add({ setClosed }) {

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [prices, setPrices] = useState([]);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);

    const changePrice = (e, index) => {
        const currentPrices = prices;
        currentPrices[index] = e.target.value;

        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
        setExtra(null);
    };
    const handleRemove = (text) => {
        const item = extraOptions.findIndex(item => item.text === text);
        setExtraOptions(prev => prev.filter((_, i) => i !== item));


    }
    const handleCreate = async () => {
        const formdata = new FormData();
        formdata.append('file', file);
        formdata.append("upload_preset", "uploads");
        try {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dexzm3c8z/image/upload", formdata)

            const { url } = uploadRes.data;
            const newProduct = {
                title, desc, prices, extraOptions, img: url
            }

            await axios.post("http://localhost:3000/api/products", newProduct)
            setClosed(true);

        } catch (error) {
            console.log(error);
        }
        // console.log(newProduct);

    }

    return <div className='w-full h-[100vh] absolute top-0 left-0 flex items-center justify-center bg-gray-400/40 z-50'>
        <div className='bg-white relative p-4 rounded-lg'>
            <div className='absolute top-[-6px] right-[6px]'>
                <span onClick={() => setClosed(true)} className='text-red-500 font-bold text-2xl cursor-pointer'>X</span>
            </div>
            <h1 className='text-center text-3xl font-bold p-2'>Add a New Pizza</h1>
            <div className='p-2 flex flex-col justify-center'>
                <div>
                    <label htmlFor="" className='text-blue-500'>Choose an Image</label>
                    <input type="file" name="pizza" id="" className='w-full' onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className='p-2'>
                    <label htmlFor="" className='mr-4'>Title :</label>
                    <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} className='input w-full' />
                </div>
                <div className='p-2'>
                    <label htmlFor="">Description:</label>
                    <input type="text" name="desc" id="" value={desc} onChange={(e) => setDesc(e.target.value)} className='w-full input' />
                </div>
                <div>
                    <label htmlFor="">Price</label>
                    <div className='space-x-3'>
                        <input type="number" name="text" placeholder='small' className='input' onChange={(e) => changePrice(e, 0)} />
                        <input type="number" className='input' name="text" placeholder='medium' onChange={(e) => changePrice(e, 1)} />
                        <input type="number" className='input' name="text" placeholder='Large' onChange={(e) => changePrice(e, 2)} />

                    </div>

                </div>
                <div>
                    <label htmlFor="">Extra</label>
                    <div className='space-x-3'>
                        <input type="text" placeholder='item' className='input' name='text' onChange={handleExtraInput} />
                        <input type="number" placeholder='price' name='price' className='input' onChange={handleExtraInput} />
                        <button onClick={handleExtra}
                            className='bg-red-400 p-2 rounded-xl m-1'
                            disabled={extra === null}>
                            Add
                        </button>
                    </div>
                    <div className='p-3'>
                        {extraOptions.map(option => (
                            <span className='text-blue-500 font-semibold p-2 border border-blue-500 rounded-lg ' key={option.text}
                            >{option.text}</span>
                        ))}
                    </div>
                </div>
                <button
                    className='bg-red-500 rounded-xl p-1 mt-9 text-white active:scale-90 transition-all duration-200 ease-out bg-opacity-80 hover:bg-opacity-100 '
                    onClick={handleCreate}
                >Create</button>

            </div>
        </div>
    </div>;
}

export default Add;
