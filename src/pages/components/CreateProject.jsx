import React from "react";
import { useState } from "react";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/outline";

const CreateProject = ({setData}) => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [members, setMembers] = useState([]);
  const [memberEmail, setMemberEmail] = useState("");
  const [memeberName , setmemberName] = useState('');
  const [collaborators , setCollaborators] = useState([]);
  

  const handleAddMember = () => {
    if (memberEmail && !members.includes(memberEmail)) {
      setMembers([...members, memberEmail]);
      setMemberEmail("");
    }
  };


  const handleCollaborators = ()=>{
    if(memeberName && !collaborators.includes(memeberName)){
      setCollaborators([...collaborators , memeberName])
      setmemberName('')
    }

  }


  const handleRemoveCollaborators=(index)=>{
    setCollaborators(collaborators.filter((_, i)=> i !==index))
  }

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (!projectName.trim()) return alert("Project name is required");
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/projects/createprojects`, {
        name: projectName,
        description,
        members,
        collaborators

       
        
      });
      console.log(response.data.name);

      
     
      
      setProjectName("");
      setDescription("");
      setMembers([]);
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6 border border-gray-200 pt-[120px]">
      <h2 className="text-3xl font-bold text-center text-gray-800">Create Project</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add Member "
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={memeberName}
            onChange={(e) => setmemberName(e.target.value)}
          />
          <button
            onClick={handleCollaborators}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">{
          collaborators.map((mem, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              {mem}
              <XCircleIcon className="h-5 w-5 text-red-500 cursor-pointer" onClick={() => handleRemoveCollaborators(index)} />
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-3">
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Add Member (Email)"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={memberEmail}
            onChange={(e) => setMemberEmail(e.target.value)}
          />
          <button
            onClick={handleAddMember}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {members.map((mem, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
              {mem}
              <XCircleIcon className="h-5 w-5 text-red-500 cursor-pointer" onClick={() => handleRemoveMember(index)} />
            </li>
          ))}
        </ul>
      </div>
        
        
     
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-lg font-semibold"
      >
        Create Project
      </button>
    </div>
  );
};

export default CreateProject ;
