'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Udonis Haslem',
    image: `/player/player-1.png`,
    team: 'ABC Team',
    sports: 'Udonis Haslem',
    position: 'senior',
    League_Badge: 'Udonis Haslem',
    bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  })

  return (
    <div className=" max-xl:w-full  w-1/2">
      <div className="responsive-width mx-auto">
        <div className="bg-[#0F1724] rounded-2xl p-8  relative">
          {/* Edit Button */}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="mx-auto text-2xl flex items-center justify-center font-bold">
                Athlete Details{' '}
              </div>
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-red-500">
                <Image
                  src={profileData.image}
                  alt="Profile"
                  width={256}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 text-white space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Name: {profileData.name}
                </h1>

                <p className="mb-2">Sports: {profileData.sports}</p>
              </div>

              <div className="space-y-3 ">
                <div>
                  <span className="text-yellow-400 font-semibold">
                    Team: {profileData.team}
                  </span>
                </div>

                <div>
                  <span className="text-white">Position: </span>
                  <span className="text-green-400 font-semibold">
                    {profileData.position}
                  </span>
                </div>

                <div>
                  <span className="text-white">League Badge: </span>
                  <span className="text-red-400 font-semibold">
                    {profileData.League_Badge}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-white flex  gap-2">
                  <div className="font-semibold">Bio: </div>
                  <div>{profileData.bio} </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .edit-profile-modal .ant-modal-header {
          border-bottom: 1px solid #f0f0f0;
          padding: 20px 24px;
        }

        .ant-modal-header {
          background-color: #000 !important;
          color: #fff;
        }

        .edit-profile-modal .ant-modal-body {
          padding: 24px;
        }

        .edit-profile-modal .ant-form-item-label > label {
          font-weight: 600;
          color: #374151;
        }

        .edit-profile-modal .ant-input {
          border: 1px solid #d1d5db;
          transition: all 0.2s;
        }

        .edit-profile-modal .ant-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }
      `}</style>
    </div>
  )
}

export default Profile
