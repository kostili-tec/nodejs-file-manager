import os from 'os';

export const getCPUs = () => {
  const cpus = os.cpus();
  const modelName = cpus[0].model;
  const cpuSpeedGHz = Number((cpus[0].speed / 1000).toFixed(2));
  const totalCores = cpus.length;

  console.log('Model name: ', modelName);
  console.log('Speed: ', cpuSpeedGHz, ' GHz');
  console.log('Total cores (or threads): ', totalCores);
};
