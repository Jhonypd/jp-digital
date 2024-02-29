/** @format */

interface listServiceProps {
  name: string;
  description?: string[];
  id: string;
}

export const listServices: listServiceProps[] = [
  {
    name: "UX Design",
    id: "01",
    description: [
      `Web Development`,
      `SaaS Platform Development`,
      "Full Stack Development",
      "We create innovative solutions to solve customer problems and giving you more control over product.",
      "We create innovative solutions to solve customer problems and giving you more control over product.",
    ],
  },
  {
    name: "Front-end",
    id: "02",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    ],
  },
  {
    name: "Test",
    id: "03",
    description: [
      "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s.",
    ],
  },
  {
    name: "Delivery",
    id: "04",
    description: [
      "We create innovative solutions to solve customer problems and giving you more control over product.",
      "We fill in the technology gaps for you.",
    ],
  },
];
