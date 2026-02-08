import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

interface MetricsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Demo data - replace with actual metrics later
const barChartData = [
  { name: "Q4", value: 0.87, fullMark: 1 },
  { name: "SSIM", value: 0.92, fullMark: 1 },
  { name: "PSNR", value: 0.78, fullMark: 1 },
];

const nrmseData = [
  { name: "Urban", nrmse: 0.12 },
  { name: "Forest", nrmse: 0.08 },
  { name: "Water", nrmse: 0.05 },
  { name: "Agriculture", nrmse: 0.09 },
  { name: "Mountain", nrmse: 0.14 },
];

const radarData = [
  { metric: "Q4", ourModel: 87, baseline: 65 },
  { metric: "NRMSE", ourModel: 92, baseline: 70 },
  { metric: "SAM", ourModel: 85, baseline: 60 },
  { metric: "SSIM", ourModel: 91, baseline: 72 },
  { metric: "PSNR", ourModel: 78, baseline: 68 },
];

export const MetricsDialog = ({ open, onOpenChange }: MetricsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            Evaluation Metrics
          </DialogTitle>
          <DialogDescription>
            Performance metrics comparing our SAR colorization model against baseline approaches.
            <span className="block mt-1 text-xs text-amber-400">(Demo data - actual metrics to be added)</span>
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          {/* Quality Metrics Bar Chart */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold mb-4">Quality Metrics Score</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barChartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 1]} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" width={60} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* NRMSE by Land Type */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold mb-4">NRMSE by Land Cover Type</h3>
            <p className="text-xs text-muted-foreground mb-4">Lower is better</p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={nrmseData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[0, 0.2]} stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="nrmse" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Radar Comparison Chart */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold mb-4">Model Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <Radar
                    name="Our Model"
                    dataKey="ourModel"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                  <Radar
                    name="Baseline"
                    dataKey="baseline"
                    stroke="hsl(var(--muted-foreground))"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity={0.2}
                  />
                  <Legend />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Metric Descriptions */}
          <div className="glass rounded-xl p-6">
            <h3 className="font-display font-semibold mb-4">Metric Descriptions</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="p-3 rounded-lg bg-background/50">
                <span className="font-semibold text-primary">Q4</span>
                <p className="text-muted-foreground mt-1">
                  Quaternion-based quality index measuring color and structural fidelity.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background/50">
                <span className="font-semibold text-primary">NRMSE</span>
                <p className="text-muted-foreground mt-1">
                  Normalized Root Mean Square Error - measures pixel-level accuracy.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-background/50">
                <span className="font-semibold text-primary">SAM</span>
                <p className="text-muted-foreground mt-1">
                  Spectral Angle Mapper - evaluates spectral similarity between images.
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
