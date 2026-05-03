import "./AdminUserManagement.css";
import Header from "../../components/layout/Header";
import { images } from "../../assets/images";
import { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@student.edu",
    role: "Student",
    department: "-",
    status: "Active",
  },
  {
    id: 2,
    name: "Emma Wilson",
    email: "emma@student.edu",
    role: "Student",
    department: "-",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@student.edu",
    role: "Student",
    department: "-",
    status: "Active",
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    email: "sarah@teacher.edu",
    role: "Teacher",
    department: "Computer Science",
    status: "Active",
  },
  {
    id: 5,
    name: "Prof. David Lee",
    email: "david@teacher.edu",
    role: "Teacher",
    department: "Mathematics",
    status: "Active",
  },
  {
    id: 6,
    name: "Dr. Maria Garcia",
    email: "maria@teacher.edu",
    role: "Teacher",
    department: "Physics",
    status: "Active",
  },
  {
    id: 7,
    name: "Prof. James Miller",
    email: "james@teacher.edu",
    role: "Teacher",
    department: "Computer Science",
    status: "Active",
  },
  {
    id: 8,
    name: "Admin User",
    email: "admin@consult.edu",
    role: "Admin",
    department: "Administration",
    status: "Active",
  },
  {
    id: 9,
    name: "Blocked Student",
    email: "blocked@student.edu",
    role: "Student",
    department: "-",
    status: "Blocked",
  },
];

const AdminUserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isRoleOpen, setIsRoleOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("Student");

  const [teacherForm, setTeacherForm] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
  });

  const filteredUsers = users.filter((user) => {
    const searchValue = search.toLowerCase();

    const matchesSearch =
      user.name.toLowerCase().includes(searchValue) ||
      user.email.toLowerCase().includes(searchValue);

    const matchesRole = roleFilter === "All" || user.role === roleFilter;

    return matchesSearch && matchesRole;
  });

  const openRoleModal = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role);
    setIsRoleOpen(true);
  };

  const closeRoleModal = () => {
    setSelectedUser(null);
    setIsRoleOpen(false);
  };

  const handleChangeRole = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === selectedUser.id
          ? {
              ...user,
              role: selectedRole,
              department:
                selectedRole === "Student"
                  ? "-"
                  : user.department === "-"
                  ? ""
                  : user.department,
            }
          : user
      )
    );

    closeRoleModal();
  };

  const handleToggleStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );
  };

  const handleCreateTeacher = (e) => {
    e.preventDefault();

    const newTeacher = {
      id: Date.now(),
      name: teacherForm.name,
      email: teacherForm.email,
      role: "Teacher",
      department: teacherForm.department,
      status: "Active",
    };

    setUsers((prevUsers) => [...prevUsers, newTeacher]);

    setTeacherForm({
      name: "",
      email: "",
      department: "",
      password: "",
    });

    setIsCreateOpen(false);
  };

  return (
    <div className="admin-users-page">
      <Header role="admin" />

      <main className="admin-users-content">
        <section className="admin-users-title">
          <h1>User Management</h1>
          <p>Manage users, roles, and permissions</p>
        </section>

        <div className="admin-users-toolbar">
            <div className="admin-users-search">
            <span className="admin-users-search-icon">⌕</span>
            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>

          <select
            className="admin-users-filter"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Student">Students</option>
            <option value="Teacher">Teachers</option>
            <option value="Admin">Admins</option>
          </select>

          <button
            className="admin-users-create-btn"
            onClick={() => setIsCreateOpen(true)}
          >
            <img src={images.people} alt="" />
            Create Teacher
          </button>
        </div>

        <section className="admin-users-card">
          <div className="admin-users-card-header">
            <h2>All Users ({filteredUsers.length})</h2>
          </div>

          <div className="admin-users-table">
            <div className="admin-users-row admin-users-head">
              <span>User</span>
              <span>Email</span>
              <span>Role</span>
              <span>Department</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            {filteredUsers.map((user) => (
              <div className="admin-users-row" key={user.id}>
                <div className="admin-users-person">
                  <div className="admin-users-avatar">
                    <img src={images.people} alt="" />
                  </div>
                  <strong>{user.name}</strong>
                </div>

                <span className="admin-users-email">{user.email}</span>

                <span className={`admin-users-role ${user.role.toLowerCase()}`}>
                  {user.role}
                </span>

                <span className="admin-users-department">
                  {user.department || "-"}
                </span>

                <span className={`admin-users-status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>

                <div className="admin-users-actions">
                  <button
                    className="admin-users-role-btn"
                    onClick={() => openRoleModal(user)}
                  >
                    Change Role
                  </button>

                  <button
                    className={
                      user.status === "Active"
                        ? "admin-users-block-btn"
                        : "admin-users-unblock-btn"
                    }
                    onClick={() => handleToggleStatus(user.id)}
                  >
                    {user.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isCreateOpen && (
        <div className="admin-users-modal-overlay">
          <form className="admin-users-modal" onSubmit={handleCreateTeacher}>
            <div className="admin-users-modal-header">
              <h2>Create New Teacher Account</h2>
              <button type="button" onClick={() => setIsCreateOpen(false)}>
                ×
              </button>
            </div>

            <div className="admin-users-modal-body">
              <label>
                Full Name
                <input
                  type="text"
                  placeholder="Enter teacher's full name"
                  value={teacherForm.name}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherForm, name: e.target.value })
                  }
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  placeholder="teacher@example.edu"
                  value={teacherForm.email}
                  onChange={(e) =>
                    setTeacherForm({ ...teacherForm, email: e.target.value })
                  }
                  required
                />
              </label>

              <label>
                Department
                <input
                  type="text"
                  placeholder="e.g. Computer Science"
                  value={teacherForm.department}
                  onChange={(e) =>
                    setTeacherForm({
                      ...teacherForm,
                      department: e.target.value,
                    })
                  }
                  required
                />
              </label>

              <label>
                Temporary Password
                <input
                  type="password"
                  placeholder="Set initial password"
                  value={teacherForm.password}
                  onChange={(e) =>
                    setTeacherForm({
                      ...teacherForm,
                      password: e.target.value,
                    })
                  }
                  required
                />
              </label>

              <div className="admin-users-info">
                The teacher will be able to log in using the provided email and
                password.
              </div>
            </div>

            <div className="admin-users-modal-footer">
              <button
                type="button"
                className="admin-users-cancel-btn"
                onClick={() => setIsCreateOpen(false)}
              >
                Cancel
              </button>

              <button type="submit" className="admin-users-submit-btn">
                Create Teacher
              </button>
            </div>
          </form>
        </div>
      )}

      {isRoleOpen && selectedUser && (
        <div className="admin-users-modal-overlay">
          <div className="admin-users-modal admin-users-role-modal">
            <div className="admin-users-modal-header">
              <h2>Change User Role</h2>
              <button type="button" onClick={closeRoleModal}>
                ×
              </button>
            </div>

            <div className="admin-users-modal-body">
              <div className="admin-users-selected">
                <div className="admin-users-avatar">
                  <img src={images.people} alt="" />
                </div>
                <div>
                  <strong>{selectedUser.name}</strong>
                  <p>{selectedUser.email}</p>
                </div>
              </div>

              <label>
                Select New Role
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                </select>
              </label>
            </div>

            <div className="admin-users-modal-footer">
              <button
                type="button"
                className="admin-users-cancel-btn"
                onClick={closeRoleModal}
              >
                Cancel
              </button>

              <button
                type="button"
                className="admin-users-submit-btn"
                onClick={handleChangeRole}
              >
                Confirm Change
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManagement;