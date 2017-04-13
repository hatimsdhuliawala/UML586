const CHART = {
  Bar : Bar,
  Line : Line,
  Stack : Stack,
  Pie : Pie,
  Doughnut : Doughnut
};

class SelectDataset1 extends DatasetsC {
  plotChart(type, datasetName, divID) {
    let PlotchartConstructor = CHART[type];
    let chartType = null;
    if (PlotchartConstructor) {
      console.log(datasetName);
      chartType = new PlotchartConstructor(datasetName, divID);
    }
    return chartType;
  }
}
