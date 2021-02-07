import * as Knex from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("books").del();

  // Inserts seed entries
  await knex("books").insert([
    // Since we used 'increments', do not pass id field, DB will sort it out itself
    {
      authors: JSON.stringify(["Jonathan Haidt"]),
      title: "Coddling of the American Mind",
    },
    {
      authors: JSON.stringify(["Dan Heath", "Chip Heath"]),
      title: "Switch: How to change when change is hard",
    },
    {
      authors: JSON.stringify(["Dan Heath", "Chip Heath"]),
      title: "Decisive: How to make better choices in life and work",
    },
    {
      authors: JSON.stringify(["Kathy Sierra"]),
      title: "Badass: Making users awesome",
    },
    {
      authors: JSON.stringify(["Daniel Kahneman"]),
      title: "Thinking fast, thinking slow",
    },
    {
      authors: JSON.stringify(["Caroline Dweck"]),
      title: "Mindset",
    },
    {
      authors: JSON.stringify(["Michael Walker"]),
      title: "Why we sleep?",
    },
    {
      authors: JSON.stringify(["Jonathan Haidt"]),
      title: "The Happiness Hypothesis",
    },
    {
      authors: JSON.stringify(["Patrick Lencioni"]),
      title: "The five dysfunctions of a team",
    },
    {
      authors: JSON.stringify(["Chris Voss"]),
      title: "Never split the difference",
    },
    {
      authors: JSON.stringify(["Marshall Rosenberg"]),
      title: "Non-violent Communication",
    },
    {
      authors: JSON.stringify(["Andy Hunt"]),
      title: "Practical thinking & learning",
    },
    {
      authors: JSON.stringify(["Steve Krug"]),
      title: "Do not make me think",
    },
    {
      authors: JSON.stringify(["Michael D. Watkins"]),
      title: "The First 90 Days",
    },
    {
      authors: JSON.stringify(["Sam Newman"]),
      title: "Building Microservices",
    },
    {
      authors: JSON.stringify(["Donald A. Norman"]),
      title: "The Design of Everyday Things",
    },
  ]);
}
