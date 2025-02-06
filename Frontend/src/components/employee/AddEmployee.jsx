import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        password: "",
        image: null,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("role", formData.role);
        data.append("password", formData.password);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await axios.post("http://localhost:5000/api/employee/add", data, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": "multipart/form-data",
                }
            });
            

            if (response.data.success) {
                setSuccess(response.data.message);
                setError("");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    role: "",
                    password: "",
                    image: null,
                });

                setTimeout(() => {
                    navigate("/admin-dashboard/employees"); 
                }, 2000);
            }
        } catch (error) {
            if (error.response && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("Error occurred, please try again later.");
            }
            setSuccess("");
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Employee Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={formData.name}
                            placeholder="Enter Name"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter Email"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            onChange={handleChange}
                            value={formData.phone}
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
                            onChange={handleChange}
                            value={formData.password}
                            placeholder="*************"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Role</label>
                        <select
                            name="role"
                            onChange={handleChange}
                            value={formData.role}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="employee">Employee</option> 
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleChange}
                            accept="image/*"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                >
                    Add Employee
                </button>
            </form>
        </div>
    );
};

export default AddEmployee;
