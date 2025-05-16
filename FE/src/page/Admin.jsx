import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Admin() {
    const [data, setdata] = useState([])
    const [orginal, setorginal] = useState([])

    async function getAlldata() {
        let resp = await axios.get("http://localhost:3000")
        setdata(resp.data)
        setorginal(resp.data)
    }
    async function deleteData(id) {
        await axios.delete("http://localhost:3000/" + id)
        await getAlldata()
    }


    useEffect(() => {
        getAlldata()
    }, [])

    function handleSearch(e) {
        let searchValue = e.target.value
        let filtered = orginal.filter(x => x.product.toLowerCase().trim().includes(searchValue.toLowerCase().trim()))
        setdata(filtered)
    }

    function handleSort(e) {
        let selectValue = e.target.value
        let filtered

        switch (selectValue) {
            case "low":
                filtered=orginal.sort((a,b)=>a.price-b.price)
                console.log(filtered)
                break;
            case "high":
                filtered=orginal.sort((a,b)=>b.price-a.price)
                console.log(filtered)
                break;
            case "a-z":
                filtered=orginal.sort((a,b)=>a.product.localeCompare(b.product))
                console.log(filtered)
                break;
            case "z-a":
                filtered=orginal.sort((a,b)=>b.product.localeCompare(a.product))
                console.log(filtered)
                break;
            case "all":
                filtered=orginal
                break;

            default:
                break;
        }


        setdata([...filtered])
    }
    return (
        <>
            <div>

                <input type="text" placeholder='search' onChange={(e) => handleSearch(e)} /></div>

            <select name="select" id="select" onChange={(e) => handleSort(e)}>
                <option value="all">all</option>
                <option value="low">low</option>
                <option value="high">high</option>
                <option value="a-z">a-z</option>
                <option value="z-a">z-a</option>
            </select>

            <table border={1}>
                <thead>
                    <tr>
                        <th>image</th>
                        <th>product</th>
                        <th>price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x) => {
                            return <tr key={x._id}>
                                <td>{x._id}</td>
                                <td>{x.image}</td>
                                <td>{x.product}</td>
                                <td>{x.price}</td>
                                <td>
                                    <button onClick={() => { deleteData(x._id) }} >delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>

        </>
    )
}

export default Admin


