/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("letters").del();
  await knex("letters").insert([
    {
      id: "1",
      letter: "A",
      image_src: "./images/asl/A_image.png",
    },
    {
      id: "2",
      letter: "B",
      image_src: "./images/asl/B_image.png",
    },
    {
      id: "3",
      letter: "C",
      image_src: "./images/asl/C_image.png",
    },
    {
      id: "4",
      letter: "D",
      image_src: "./images/asl/D_image.png",
    },
    {
      id: "5",
      letter: "E",
      image_src: "./images/asl/E_image.png",
    },
    {
      id: "6",
      letter: "F",
      image_src: "./images/asl/F_image.png",
    },
    {
      id: "7",
      letter: "G",
      image_src: "./images/asl/G_image.png",
    },
    {
      id: "8",
      letter: "H",
      image_src: "./images/asl/H_image.png",
    },
    {
      id: "9",
      letter: "I",
      image_src: "./images/asl/I_image.png",
    },
    {
      id: "10",
      letter: "J",
      image_src: "./images/asl/J_image.png",
    },
    {
      id: "11",
      letter: "K",
      image_src: "./images/asl/K_image.png",
    },
    {
      id: "12",
      letter: "L",
      image_src: "./images/asl/L_image.png",
    },
    {
      id: "13",
      letter: "M",
      image_src: "./images/asl/M_image.png",
    },
    {
      id: "14",
      letter: "N",
      image_src: "./images/asl/N_image.png",
    },
    {
      id: "15",
      letter: "O",
      image_src: "./images/asl/O_image.png",
    },
    {
      id: "16",
      letter: "P",
      image_src: "./images/asl/P_image.png",
    },
    {
      id: "17",
      letter: "Q",
      image_src: "./images/asl/Q_image.png",
    },
    {
      id: "18",
      letter: "R",
      image_src: "./images/asl/R_image.png",
    },
    {
      id: "19",
      letter: "S",
      image_src: "./images/asl/S_image.png",
    },
    {
      id: "20",
      letter: "T",
      image_src: "./images/asl/T_image.png",
    },
    {
      id: "21",
      letter: "U",
      image_src: "./images/asl/U_image.png",
    },
    {
      id: "22",
      letter: "V",
      image_src: "./images/asl/V_image.png",
    },
    {
      id: "23",
      letter: "W",
      image_src: "./images/asl/W_image.png",
    },
    {
      id: "24",
      letter: "X",
      image_src: "./images/asl/X_image.png",
    },
    {
      id: "25",
      letter: "Y",
      image_src: "./images/asl/Y_image.png",
    },
    {
      id: "26",
      letter: "Z",
      image_src: "./images/asl/Z_image.png",
    },
  ]);
};
