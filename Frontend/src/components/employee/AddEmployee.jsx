

const AddEmployee = () => {
  return (
    <div className=" max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">Add New Farmer</h2>
        <form>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className=" block text-sm font-medium text-gray-700">Farmer Name</label>
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className=" mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    required
                     />
                </div>
                <div>
                    <label className=" block text-sm font-medium text-gray-700">Email</label>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    className=" mt-1 p-2 block w-full border border-gray-300 rounded-md"
                    required
                     />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                     type="tel"
                     name="phone"
                     placeholder="Enter Phone Number"
                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                     pattern="[0-9]{10}"  
                     required
                    />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input 
                     type="password"
                     name="password"
                     placeholder="*************"
                     className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                     required
                    />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select name="role" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="">Employee</option>
                    </select>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                <input 
                 type="file"
                 name="image"
                 placeholder="Upload image"
                 accept="image/*"
                 className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                 />
                </div>
            </div>
            <button type="submit" className=" w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                Add Farmer
            </button>
        </form>
    </div>
  )
}

export default AddEmployee