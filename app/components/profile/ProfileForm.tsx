import React, { useState } from 'react';
import Image from 'next/image'; 
import ProfileImage from '@/app/assets/profile-image.png';
import edit from '@/app/assets/edit.png';
import Input from '../forms/Input';

const ProfileForm: React.FC = () => {
  
  const [formData, setFormData] = useState({
    name: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    dob: '25/01/1990',
    permanentAddress: 'San Jose, California, USA',
    postalCode: '45962',
    username: 'Charlene Reed',
    password: 'djshjdsdkj',
    presentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    country: 'USA',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = () => {
    console.log('check');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr_1fr] gap-6">
        
        <div className="flex justify-center items-start relative">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-38 lg:h-38 rounded-full">
            <Image
              src={ProfileImage} 
              alt="User Image"
              width={160}
              height={160}
              className="object-cover rounded-full"
            />

            <button
              onClick={handleEditClick} 
              className="absolute bottom-0 right-0 rounded-full transform translate-x-1 translate-y-1 p-2"
            >
              <Image src={edit} alt="Edit" width={20} height={20} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            label="Your Name"
            onChange={handleChange}
          />
          <Input
            name="email"
            value={formData.email}
            label="Email"
            onChange={handleChange}
          />
          <Input
            type="date"
            name="dob"
            value={formData.dob}
            label="Date of Birth"
            onChange={handleChange}
          />
          <Input
            name="permanentAddress"
            value={formData.permanentAddress}
            label="Permanent Address"
            onChange={handleChange}
          />
          <Input
            name="postalCode"
            value={formData.postalCode}
            label="Postal Code"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-4">
          <Input
            name="username"
            value={formData.username}
            label="Username"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            label="Password"
            onChange={handleChange}
          />
          <Input
            name="presentAddress"
            value={formData.presentAddress}
            label="Present Address"
            onChange={handleChange}
          />
          <Input
            name="city"
            value={formData.city}
            label="City"
            onChange={handleChange}
          />
          <Input
            name="country"
            value={formData.country}
            label="Country"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="bg-[#232323] text-white py-2 px-6 rounded-lg min-w-[120px]"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
