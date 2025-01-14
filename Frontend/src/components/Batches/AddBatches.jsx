import { useState } from "react"
import { useNavigate } from "react-router-dom"



const AddBatches = () => {

  const navigate = useNavigate()
  const [batch,setBatch] = useState({
    batch_name: '',
    description: ''
  })

  const handleChange = (e) => {
    const {name,value} = e.target
    setBatch({...batch,[name]: value})
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/batch/add',batch,{
        header: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      if(response.data.success){
          navigate("/admin-dashboard/batches")
      }
    } catch (error) {
      if(error.response && !error.response.data.success){
        alert(error.response.data.error);
      }
    }
  }

  return (
    <div className=" max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <div >
        <h2 className=" text-2xl font-bold mb-6">Add New Batches</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label
             htmlFor="batch_name"
            className=" text-sm font-medium text-gray-700"
            >Batch Name</label>
            <input type="text" name="batch_name" onChange={handleChange} placeholder="Enter batch name" className=" mt-1 w-full p-2 border border-gray-300 rounded-md"/>
          </div>
          <div className=" mt-3">
            <label htmlFor="description" className=" block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" onChange={handleChange} placeholder="description..."
            className=" mt-1 p-2 block w-full border border-x-gray-300 rounded-md"
            rows="4"
            ></textarea>
          </div>
          <button
          type="submit"
          className=" w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >Add Batch</button>
        </form>
      </div>
    </div>
  )
}

export default AddBatches