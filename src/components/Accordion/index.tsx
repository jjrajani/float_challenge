import { styled } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FC, ReactNode, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ExpandLess />} {...props} />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface CustomizedAccordionsProps<T> {
  panels: {
    id: string;
    title: string;
    component: FC<{ data: T }>;
    data: T;
    actions: ReactNode;
  }[];
  initialExpanded?: string;
}

const CustomizedAccordions = <DataType,>({
  panels = [],
  initialExpanded,
}: CustomizedAccordionsProps<DataType>) => {
  const [expanded, setExpanded] = useState<string | undefined>(initialExpanded);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : undefined);
    };

  return (
    <div>
      {panels.map((panel) => {
        return (
          <Accordion
            key={panel.id}
            expanded={expanded === panel.id}
            onChange={handleChange(panel.id)}>
            <AccordionSummary
              aria-controls={`${panel.id}-content`}
              id={`${panel.id}-header`}>
              <Typography component="span">{panel.title}</Typography>
              {panel.actions && <div>{panel.actions}</div>}
            </AccordionSummary>
            <AccordionDetails>
              <panel.component data={panel.data} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CustomizedAccordions;
