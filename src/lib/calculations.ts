export interface CalculationParams {
  projectName: string;
  laborHours: number;
  hourlyRate: number;
  materialCostCoef: number; // 0.1 - 0.3
  overheadCostCoef: number; // 0.1 - 0.25
}

export interface CalculationResult {
  laborCost: number;
  materialCost: number;
  overheadCost: number;
  totalCost: number;
}

export const calculateSoftwareCost = (params: CalculationParams): CalculationResult => {
  const laborCost = params.laborHours * params.hourlyRate;
  const materialCost = laborCost * params.materialCostCoef;
  const overheadCost = laborCost * params.overheadCostCoef;
  const totalCost = laborCost + materialCost + overheadCost;

  return {
    laborCost,
    materialCost,
    overheadCost,
    totalCost,
  };
};
