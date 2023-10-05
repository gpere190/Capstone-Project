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
      image_src: "./assets/images/A_image.png",
    },
    {
      id: "2",
      letter: "B",
      image_src: "./assets/images/B_image.png",
    },
    {
      id: "3",
      letter: "C",
      image_src: "./assets/images/C_image.png",
    },
    {
      id: "4",
      letter: "D",
      image_src: "./assets/images/D_image.png",
    },
    {
      id: "5",
      letter: "E",
      image_src: "./assets/images/E_image.png",
    },
    {
      id: "6",
      letter: "F",
      image_src: "./assets/images/F_image.png",
    },
    {
      id: "7",
      letter: "G",
      image_src: "./assets/images/G_image.png",
    },
    {
      id: "8",
      letter: "H",
      image_src: "./assets/images/H_image.png",
    },
    {
      id: "9",
      letter: "I",
      image_src: "./assets/images/I_image.png",
    },
    {
      id: "10",
      letter: "J",
      image_src: "./assets/images/J_image.png",
    },
    {
      id: "11",
      letter: "K",
      image_src: "./assets/images/K_image.png",
    },
    {
      id: "12",
      letter: "L",
      image_src: "./assets/images/L_image.png",
    },
    {
      id: "13",
      letter: "M",
      image_src: "./assets/images/M_image.png",
    },
    {
      id: "14",
      letter: "N",
      image_src: "./assets/images/N_image.png",
    },
    {
      id: "15",
      letter: "O",
      image_src: "./assets/images/O_image.png",
    },
    {
      id: "16",
      letter: "P",
      image_src: "./assets/images/P_image.png",
    },
    {
      id: "17",
      letter: "Q",
      image_src: "./assets/images/Q_image.png",
    },
    {
      id: "18",
      letter: "R",
      image_src: "./assets/images/R_image.png",
    },
    {
      id: "19",
      letter: "S",
      image_src: "./assets/images/S_image.png",
    },
    {
      id: "20",
      letter: "T",
      image_src: "./assets/images/T_image.png",
    },
    {
      id: "21",
      letter: "U",
      image_src: "./assets/images/U_image.png",
    },
    {
      id: "22",
      letter: "V",
      image_src: "./assets/images/V_image.png",
    },
    {
      id: "23",
      letter: "W",
      image_src: "./assets/images/W_image.png",
    },
    {
      id: "24",
      letter: "X",
      image_src: "./assets/images/X_image.png",
    },
    {
      id: "25",
      letter: "Y",
      image_src: "./assets/images/Y_image.png",
    },
    {
      id: "26",
      letter: "Z",
      image_src: "./assets/images/Z_image.png",
    },
  ]);
};
