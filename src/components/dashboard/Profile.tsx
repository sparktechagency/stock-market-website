'use client'

import React, { useEffect, useState } from 'react'
import { Modal, Button, Form, Input, Upload, message, UploadFile } from 'antd'
import { EditOutlined, CameraOutlined } from '@ant-design/icons'
import type { UploadChangeParam, RcFile, UploadProps } from 'antd/es/upload'
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from '@/redux/profileApis'
import { url } from '@/redux/main/server'

interface ProfileData {
  name: string
  email: string
  image: string
  totalAthletes: string
  sports: string
  totalValue: string
  totalGain: string
  totalLoss: string
  availableBalance: string
  bio: string
}

interface FormValues {
  name: string
  email: string
}

const Profile: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [form] = Form.useForm<FormValues>()
  const [uploadedImageFile, setUploadedImageFile] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string>('')

  const { data: getProfileData, refetch } = useGetMyProfileQuery(undefined)
  const [updateProfile, { isLoading: isUpdating }] =
    useUpdateMyProfileMutation()

  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    email: '',
    image: '',
    totalAthletes: '04',
    sports: 'Udonis Haslem',
    totalValue: '$85468.00',
    totalGain: '+$625.2414',
    totalLoss: '-$6126.2586',
    availableBalance: '+123 8851 8961 616',
    bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
  })

  useEffect(() => {
    if (getProfileData?.data) {
      const profileImageUrl = getProfileData.data.profile_image
        ? `${url}/${getProfileData.data.profile_image.replace(/\\/g, '/')}`
        : ''

      setProfileData({
        name: getProfileData.data.name || '',
        email: getProfileData.data.email || '',
        image: profileImageUrl,
        totalAthletes: 'N/A',
        sports: 'N/A',
        totalValue: 'N/A',
        totalGain: 'N/A',
        totalLoss: 'N/A',
        availableBalance: 'N/A',
        bio: 'N/A',
      })
    }
  }, [getProfileData])

  const showModal = (): void => {
    form.setFieldsValue({
      name: profileData.name,
      email: profileData.email,
    })
    setUploadedImageFile(null)
    setPreviewImage('')
    setIsModalVisible(true)
  }

  const handleOk = async (): Promise<void> => {
    try {
      const values = await form.validateFields()

      const formData = new FormData()

      const data = {
        name: values.name,
      }
      formData.append('data', JSON.stringify(data))

      if (uploadedImageFile) {
        formData.append('profile_image', uploadedImageFile)
      }

      await updateProfile(formData).unwrap()
      await refetch()

      setIsModalVisible(false)
      setUploadedImageFile(null)
      setPreviewImage('')
      message.success('Profile updated successfully!')
    } catch (err) {
      console.error('Update profile error:', err)
      message.error('Failed to update profile. Please try again.')
    }
  }

  const handleCancel = (): void => {
    setIsModalVisible(false)
    setUploadedImageFile(null)
    setPreviewImage('')
  }

  const beforeUpload = (file: RcFile): boolean => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG files!')
      return false
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!')
      return false
    }

    // Store the file
    setUploadedImageFile(file)

    // Create preview
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target?.result) {
        setPreviewImage(e.target.result as string)
      }
    }
    reader.readAsDataURL(file)

    message.success('Image selected successfully')

    // Prevent automatic upload
    return false
  }

  const handleImageUpload = (info: UploadChangeParam<UploadFile>): void => {
    // This function might not be needed since we're handling everything in beforeUpload
    // But keeping it for any additional logic if needed
    console.log('Upload info:', info)
  }

  const uploadProps: UploadProps = {
    beforeUpload,
    onChange: handleImageUpload,
    showUploadList: false,
    accept: 'image/*',
    maxCount: 1,
  }

  // Get the current display image (preview if available, otherwise original)
  const currentDisplayImage =
    previewImage || profileData.image || '/default-profile.jpg'

  return (
    <div className="max-xl:w-full w-1/2">
      <div className="responsive-width mx-auto">
        <div className="bg-[#0F1724] rounded-2xl p-8 relative">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-red-500">
                <img
                  src={currentDisplayImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/default-profile.jpg'
                  }}
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={showModal}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 border-blue-600"
                  size="large"
                >
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Profile Information */}
            <div className="flex-1 text-white space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Name: {profileData.name}
                </h1>
                <p className="mb-2">
                  Total Athletes Team: {profileData.totalAthletes}
                </p>
                <p className="mb-2">Sports: {profileData.sports}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="text-yellow-400 font-semibold">
                    Total Value: {profileData.totalValue}
                  </span>
                </div>

                <div>
                  <span className="text-white">Total Gain: </span>
                  <span className="text-green-400 font-semibold">
                    {profileData.totalGain}
                  </span>
                </div>

                <div>
                  <span className="text-white">Total Loss: </span>
                  <span className="text-red-400 font-semibold">
                    {profileData.totalLoss}
                  </span>
                </div>

                <div>
                  <span className="text-white">
                    Available Balance: {profileData.availableBalance}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-white flex gap-2">
                  <div className="font-semibold">Bio: </div>
                  <div>{profileData.bio}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        title={
          <div className="font-semibold text-white text-2xl">Edit Profile</div>
        }
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
        okText="Save Changes"
        confirmLoading={isUpdating}
        okButtonProps={{
          style: { backgroundColor: '#F7DC6F', color: 'black' },
        }}
        cancelText="Cancel"
        cancelButtonProps={{ style: { backgroundColor: 'red', color: '#fff' } }}
        className="edit-profile-modal"
        bodyStyle={{ backgroundColor: '#000', color: '#fff' }}
        style={{ backgroundColor: '#000', color: '#fff' }}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          className="mt-6"
          style={{ backgroundColor: '#000', color: '#fff' }}
          requiredMark={false}
        >
          <Form.Item label="Profile Image" className="mb-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={currentDisplayImage}
                  alt="Current profile"
                  className="w-full h-full object-cover"
                  onError={(
                    e: React.SyntheticEvent<HTMLImageElement, Event>
                  ) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/default-profile.svg'
                  }}
                />
              </div>
              <Upload {...uploadProps}>
                <Button icon={<CameraOutlined />} size="large">
                  Change Photo
                </Button>
              </Upload>
              {uploadedImageFile && (
                <div className="text-green-400 text-sm">
                  New image selected: {uploadedImageFile.name}
                </div>
              )}
            </div>
          </Form.Item>

          <Form.Item
            label={<div className="font-semibold text-white">Name</div>}
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your name"
              className="rounded-lg"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#fff',
                borderColor: '#333',
              }}
            />
          </Form.Item>

          <Form.Item
            label={<div className="font-semibold text-white">Email</div>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
              {
                type: 'email',
                message: 'Please enter a valid email!',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Enter your email"
              className="rounded-lg"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#fff',
                borderColor: '#333',
              }}
              disabled
            />
          </Form.Item>
        </Form>
      </Modal>

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
