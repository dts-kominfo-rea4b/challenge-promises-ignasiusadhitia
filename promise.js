const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaksi) => {
  try {
    const reaksiSetelahMenontonDiTheaterIXX = await promiseTheaterIXX();
    const reaksiSetelahMenontonDiTheaterVGC = await promiseTheaterVGC();

    const reaksiSetelahMenontonDiKeduaTheater = [
      ...reaksiSetelahMenontonDiTheaterIXX,
      ...reaksiSetelahMenontonDiTheaterVGC,
    ];

    const hitungJumlahReaksi = reaksiSetelahMenontonDiKeduaTheater.filter(
      (hasilMenonton) => hasilMenonton.hasil === reaksi
    ).length;

    return hitungJumlahReaksi;
  } catch (error) {
    return error.message + "!";
  }
};

module.exports = {
  promiseOutput,
};
