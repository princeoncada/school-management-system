"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  ssr: false,
  loading: () => <h1>Loading...</h1>,
});

const forms: { [key: string]: (type: "create" | "update", data?: any) => JSX.Element; } = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
}

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {

  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";

  let icon = "";
  let bgColor = "";

  if (type === "create") {
    icon = "plus";
    bgColor = "bg-school-yellow";
  } else if (type === "update") {
    icon = "edit";
    bgColor = "bg-school-sky";
  } else {
    icon = "delete";
    bgColor = "bg-school-purple";
  }

  const [open, setOpen] = useState(false);

  const Form = () => {
    if (type === "delete" && id) return (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">All data will be lost. Are you sure you want to delete this {table}?</span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">Delete</button>
      </form>
    )

    if (type === "create" || type === "update") {
      return forms[table](type, data)
    }

    return "Form not found!";
  }

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${icon}.png`} alt="" width={16} height={16} />
      </button>
      {open && (
        <div className="w-dvw h-dvh fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center" onClick={() => setOpen(false)}>
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]" onClick={(e) => e.stopPropagation()}>
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer" onClick={() => setOpen(false)}>
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FormModal