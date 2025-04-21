import { useState } from 'react'

export default function CVEditor({ section, data, onChange }) {
  // Personal section editor
  if (section === 'personal') {
    return (
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Họ và tên</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={data.name}
            onChange={(e) => onChange({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vị trí công việc</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={data.title}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded-md p-2"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Số điện thoại</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={data.phone}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Địa chỉ</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={data.address}
            onChange={(e) => onChange({ ...data, address: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Giới thiệu</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows="4"
            value={data.about}
            onChange={(e) => onChange({ ...data, about: e.target.value })}
          ></textarea>
        </div>
      </div>
    )
  }
  
  // Experience section editor
  if (section === 'experience') {
    return (
      <div>
        {data.map((exp, index) => (
          <div key={exp.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-bold">Kinh nghiệm #{index + 1}</h3>
            
            <div className="space-y-3 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">Vị trí</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={exp.title}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...exp, title: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Công ty</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={exp.company}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...exp, company: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Từ</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2"
                    value={exp.from}
                    onChange={(e) => {
                      const updated = [...data];
                      updated[index] = { ...exp, from: e.target.value };
                      onChange(updated);
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Đến</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2"
                    value={exp.to}
                    onChange={(e) => {
                      const updated = [...data];
                      updated[index] = { ...exp, to: e.target.value };
                      onChange(updated);
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Địa điểm</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={exp.location}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...exp, location: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea
                  className="w-full border rounded-md p-2"
                  rows="3"
                  value={exp.description}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...exp, description: e.target.value };
                    onChange(updated);
                  }}
                ></textarea>
              </div>
              
              <button 
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  const updated = data.filter((_, i) => i !== index);
                  onChange(updated);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
        
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            const newItem = {
              id: `exp${Date.now()}`,
              title: 'Vị trí công việc',
              company: 'Tên công ty',
              location: 'Địa điểm',
              from: '01/2020',
              to: 'Hiện tại',
              description: 'Mô tả công việc và thành tích của bạn'
            };
            onChange([...data, newItem]);
          }}
        >
          + Thêm kinh nghiệm
        </button>
      </div>
    )
  }
  
  // Education section editor
  if (section === 'education') {
    return (
      <div>
        {data.map((edu, index) => (
          <div key={edu.id} className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h3 className="font-bold">Học vấn #{index + 1}</h3>
            
            <div className="space-y-3 mt-2">
              <div>
                <label className="block text-sm font-medium mb-1">Bằng cấp</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={edu.degree}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...edu, degree: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Trường</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={edu.school}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...edu, school: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium mb-1">Từ</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2"
                    value={edu.from}
                    onChange={(e) => {
                      const updated = [...data];
                      updated[index] = { ...edu, from: e.target.value };
                      onChange(updated);
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Đến</label>
                  <input
                    type="text"
                    className="w-full border rounded-md p-2"
                    value={edu.to}
                    onChange={(e) => {
                      const updated = [...data];
                      updated[index] = { ...edu, to: e.target.value };
                      onChange(updated);
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Địa điểm</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2"
                  value={edu.location}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...edu, location: e.target.value };
                    onChange(updated);
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mô tả</label>
                <textarea
                  className="w-full border rounded-md p-2"
                  rows="3"
                  value={edu.description}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...edu, description: e.target.value };
                    onChange(updated);
                  }}
                ></textarea>
              </div>
              
              <button 
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => {
                  const updated = data.filter((_, i) => i !== index);
                  onChange(updated);
                }}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
        
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            const newItem = {
              id: `edu${Date.now()}`,
              degree: 'Bằng cấp',
              school: 'Tên trường',
              location: 'Địa điểm',
              from: '01/2015',
              to: '12/2019',
              description: 'Mô tả về quá trình học tập và thành tích'
            };
            onChange([...data, newItem]);
          }}
        >
          + Thêm học vấn
        </button>
      </div>
    )
  }
  
  // Skills section editor
  if (section === 'skills') {
    return (
      <div>
        {data.map((skill, index) => (
          <div key={skill.id} className="mb-4 p-3 border rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <input
                type="text"
                className="flex-1 border rounded-md p-2"
                value={skill.name}
                onChange={(e) => {
                  const updated = [...data];
                  updated[index] = { ...skill, name: e.target.value };
                  onChange(updated);
                }}
              />
              
              <div className="w-20">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-full border rounded-md p-2"
                  value={skill.level}
                  onChange={(e) => {
                    const updated = [...data];
                    updated[index] = { ...skill, level: parseInt(e.target.value) || 0 };
                    onChange(updated);
                  }}
                />
              </div>
              
              <button 
                className="bg-red-500 text-white p-2 rounded-full h-8 w-8 flex items-center justify-center"
                onClick={() => {
                  const updated = data.filter((_, i) => i !== index);
                  onChange(updated);
                }}
              >
                ×
              </button>
            </div>
            
            <div className="mt-2">
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-blue-600 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-xs text-right">{skill.level}%</div>
            </div>
          </div>
        ))}
        
        <button
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
          onClick={() => {
            const newItem = {
              id: `skill${Date.now()}`,
              name: 'Kỹ năng mới',
              level: 50
            };
            onChange([...data, newItem]);
          }}
        >
          + Thêm kỹ năng
        </button>
      </div>
    )
  }
  
  return <div>Editor không khả dụng</div>
}
