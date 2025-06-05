import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminPanel() {

    const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
    }, [navigate]);

    const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');             
    };

  const [items, setItems] = useState([]);

  const [editForm, setEditForm] = useState({
    id: null,
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });
  const [editing, setEditing] = useState(false);

  const [addForm, setAddForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
  });

  const API_URL = 'https://api.nataliesugarcaneanddesserts.com';

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetch(`${API_URL}/category`);
      const data = await res.json();
      setItems(data.result);
    } catch (err) {
      console.error('Error fetching items:', err);
    }
  };

  const handleEdit = (item) => {
    setEditForm({
      id: item.id,
      name: item.name,
      category: item.category,
      price: item.price,
      description: item.description,
      image: null, 
    });
    setEditing(true);
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    setEditForm({ ...editForm, image: file });
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('name', editForm.name);
      formData.append('category', editForm.category);
      formData.append('price', editForm.price);
      formData.append('description', editForm.description);
      if (editForm.image) {
        formData.append('image', editForm.image);
      }

      await fetch(`${API_URL}/category/${editForm.id}`, {
        method: 'PUT',
        body: formData,
      });

      resetEditForm();
      fetchItems();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const resetEditForm = () => {
    setEditForm({
      id: null,
      name: '',
      category: '',
      price: '',
      description: '',
      image: null,
    });
    setEditing(false);
  };

  const handleAddChange = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };

  const handleAddImageChange = (e) => {
    const file = e.target.files[0];
    setAddForm({ ...addForm, image: file });
  };

  const handleAdd = async () => {
    try {
      const formData = new FormData();
      formData.append('name', addForm.name);
      formData.append('category', addForm.category);
      formData.append('price', addForm.price);
      formData.append('description', addForm.description);
      if (addForm.image) {
        formData.append('image', addForm.image);
      }

      await fetch(`${API_URL}/category`, {
        method: 'POST',
        body: formData,
      });

      resetAddForm();
      fetchItems();
    } catch (err) {
      console.error('Add failed:', err);
    }
  };

  const resetAddForm = () => {
    setAddForm({
      name: '',
      category: '',
      price: '',
      description: '',
      image: null,
    });
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/category/${id}`, {
        method: 'DELETE',
      });
      fetchItems();
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: 'auto', padding: '2rem' }}>
      <h2>Admin Panel</h2>
        <button onClick={handleLogout} style={{ padding: '0.5rem 1rem' }}>
          Logout
        </button>
      {editing && (
        <div style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
          <h3>Edit Item</h3>
          <input
            name="name"
            placeholder="Name"
            value={editForm.name}
            onChange={handleEditChange}
            style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
          />
          <input
            name="category"
            placeholder="Category"
            value={editForm.category}
            onChange={handleEditChange}
            style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
          />
          <input
            name="price"
            type="number"
            placeholder="Price"
            value={editForm.price}
            onChange={handleEditChange}
            style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={editForm.description}
            onChange={handleEditChange}
            rows={3}
            style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleEditImageChange}
            style={{ marginBottom: '1rem' }}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={resetEditForm} style={{ marginLeft: '0.5rem' }}>
            Cancel
          </button>
        </div>
      )}

      <table
        border="1"
        cellPadding="10"
        style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id}>
              <td style={{ textAlign: 'center' }}>
                {i.image ? (
                  <img
                    src={`data:image/jpeg;base64,${i.image}`}
                    alt={i.name}
                    style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{i.name}</td>
              <td>{i.category}</td>
              <td>{i.price}</td>
              <td>{i.description}</td>
              <td>
                <button onClick={() => handleEdit(i)}>Edit</button>
                <button onClick={() => handleDelete(i.id)} style={{ marginLeft: '0.5rem' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <h3>Add New Item</h3>
        <input
          name="name"
          placeholder="Name"
          value={addForm.name}
          onChange={handleAddChange}
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <input
          name="category"
          placeholder="Category"
          value={addForm.category}
          onChange={handleAddChange}
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          value={addForm.price}
          onChange={handleAddChange}
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={addForm.description}
          onChange={handleAddChange}
          rows={3}
          style={{ display: 'block', marginBottom: '0.5rem', width: '100%' }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAddImageChange}
          style={{ marginBottom: '1rem' }}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>
    </div>
  );
}

export default AdminPanel;
