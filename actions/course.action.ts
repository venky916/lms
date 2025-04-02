"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

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
