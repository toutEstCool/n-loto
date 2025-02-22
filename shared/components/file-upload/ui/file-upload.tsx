'use client';

import { Paperclip } from 'lucide-react';
import React, { useState } from 'react';

export const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  console.log(files);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className="xl:w-full xl:rounded-[16px] xl:border border-[#b9c1cd border-dashed xl:p-8 text-center flex flex-col gap-4 text-[#364059]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p className="hidden xl:block text-[16px] leading-5 font-HavalMittel-medium">
          текст текст текст текст
        </p>
        <p className="hidden xl:block text-[16px] leading-5 font-HavalMittel-medium">
          текст
        </p>

        <label>
          <button className="xl:mx-auto flex justify-center gap-2 border-2 border-[#1b2c92] py-3 px-5 rounded-[24px] box-border">
            <Paperclip />
            <span className="text-[20px] leading-6 font-HavalMittel-medium text-black">
              текст текст текст
            </span>
          </button>
          <input
            type="file"
            title="Выберите файлы"
            onChange={handleFileChange}
            multiple
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};
