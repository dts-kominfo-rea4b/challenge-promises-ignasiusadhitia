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

    const jumlahReaksi = reaksiSetelahMenontonDiKeduaTheater.filter(
      (hasilMenonton) => hasilMenonton.hasil === reaksi
    ).length;

    return jumlahReaksi;
  } catch (error) {
    return error.message + "!";
  }
};

module.exports = {
  promiseOutput,
};
