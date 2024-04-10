"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Results-driven and highly motivated Information Technology student with
a strong foundation in Software development and programming,
seeking opportunities to apply technical expertise in software development projects.
`;

export function Objecttivetext() {
  return <TextGenerateEffect words={words} />;
}
