"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Course } from "@prisma/client";

interface CreateCourseProps {
  title: string;
}

export async function createCourse(formData: CreateCourseProps) {
  try {
    const { userId } = await auth(); // ✅ Ensure this is only used on the server
    if (!userId) throw new Error("User is unauthenticated");

    const course = await db.course.create({
      data: { title: formData.title, userId },
    });

    return { success: true, course };
  } catch (e: any) {
    console.error("[COURSES]", e);
    return { error: e.message || "Something went wrong" };
  }
}

export async function updateCourse(values: Partial<Course>, courseId: string) {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
      },
      data: {
        ...values,
      },
    });

    return { success: true, course };
  } catch (error: any) {
    console.log("[courseId]", error);
    return { error: error.message || "Internal Error" };
  }
}
