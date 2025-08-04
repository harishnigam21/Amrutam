import React, { useState, forwardRef, useImperativeHandle } from "react";
import { generateReactHelpers } from "@uploadthing/react";

const { useUploadThing } = generateReactHelpers({
  url: process.env.REACT_APP_BACKEND_HOST + "/api/uploadthing",
});

const UploadThings = forwardRef((props, ref) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const { startUpload, isUploading } = useUploadThing("imageUploader");

  // Expose handleSubmit to parent
  useImperativeHandle(ref, () => ({
    handleSubmit: async () => {
      if (!selectedFiles.length) return [];
      const res = await startUpload(selectedFiles);
      const urls = res?.map((f) => f.ufsUrl);
      setUploadedUrls(urls || []);
      return urls;
    },
  }));

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setUploadedUrls([]); // reset previously uploaded
  };
  //TODO return error for max size and max number of file
  return (
    <div className="w-full overflow-hidden space-y-4">
      <label className="block">
        <span className="sr-only">Choose File</span>
        <input
          id="image"
          name="image"
          type="file"
          onChange={handleFileChange}
          className=" w-full text-sm text-gray-500
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-indigo-50 file:text-indigo-700
                     hover:file:bg-indigo-100"
        />
      </label>

      <strong className="text-red-600 text-[12px]">Max File : 1,Max Size : 4MB</strong>

      {selectedFiles.length > 0 && (
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-700">Selected files:</p>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {isUploading && (
        <div className="flex items-center gap-2 text-blue-600">
          <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600"></span>
          Uploading...
        </div>
      )}

      {uploadedUrls.length > 0 && (
        <div className="space-y-2">
          <p className="text-green-600 text-sm font-medium">
            ✅ Upload complete! Preview:
          </p>
        </div>
      )}
    </div>
  );
});

export default UploadThings;
