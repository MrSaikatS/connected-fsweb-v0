"use client";

import userImageUpdate from "@/hooks/userImageUpdate";
import { ImageUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFilePicker } from "use-file-picker";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const FileUpload = () => {
  const [isFile, setIsFile] = useState<boolean>(false);

  const { openFilePicker, filesContent, plainFiles } = useFilePicker({
    multiple: false,
    accept: "image/*",
    readAs: "DataURL",
    onFilesSuccessfullySelected: () => setIsFile(true),
    onClear: () => setIsFile(false),
  });

  const uploadFileHandler = async () => {
    await userImageUpdate(plainFiles[0]);
  };

  return (
    <>
      <div className="grid place-items-center">
        <Card>
          <CardContent className="flex w-2xs flex-col items-center justify-center gap-4">
            {!isFile && (
              <button
                onClick={openFilePicker}
                className="cursor-pointer">
                <ImageUp size={60} />
              </button>
            )}

            {filesContent.map((file, index) => (
              <Image
                key={index}
                src={file.content}
                alt={file.name}
                width={250}
                height={250}
                className="h-auto w-auto object-contain"
              />
            ))}

            {isFile && (
              <Button
                onClick={uploadFileHandler}
                className="cursor-pointer">
                Upload
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default FileUpload;
// http://192.168.29.10:9000/dev-s3/backiee-290902.jpg
