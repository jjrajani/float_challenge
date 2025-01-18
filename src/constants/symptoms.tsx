import HappyFace from "@mui/icons-material/SentimentSatisfiedAlt";
import SadFace from "@mui/icons-material/SentimentVeryDissatisfied";
import NeutralFace from "@mui/icons-material/SentimentNeutral";

export const symptomsStatusMeta = {
  "-1": {
    icon: <SadFace sx={{ color: "red" }} />,
    label: "Symptoms Worse",
  },
  "0": {
    icon: <NeutralFace sx={{ color: "grey" }} />,
    label: "Symptoms Unchanged",
  },
  "1": {
    icon: <HappyFace sx={{ color: "limegreen" }} />,
    label: "Symptoms Improved",
  },
};
