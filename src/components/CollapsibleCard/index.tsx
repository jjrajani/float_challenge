import {
  Card,
  CardContent,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { PropsWithChildren, useCallback, useState } from "react";
import { styled } from "@mui/material/styles";
import FlexBox from "@/components/FlexBox";

interface CollapsibleCardProps extends PropsWithChildren {
  defaultExpanded?: boolean;
  title: string;
  maxExpandHeight?: string; // the max height of the Collapse component, not the Card.
}

const Padding = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(2),
}));

const CollapsibleCard = ({
  children,
  defaultExpanded = true,
  title,
  maxExpandHeight,
}: CollapsibleCardProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = useCallback((e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  }, []);

  return (
    <Card elevation={0}>
      <CardContent
        sx={{
          paddingBottom: expanded ? "" : "16px !important",
        }}>
        <FlexBox
          fullWidth
          justify="space-between"
          align="center"
          onClick={toggleExpanded}>
          <Typography>{title}</Typography>
          <IconButton aria-label="expand" onClick={toggleExpanded}>
            <ExpandLessIcon
              sx={{
                transform: expanded ? "" : "rotate(180deg)",
              }}
            />
          </IconButton>
        </FlexBox>
        <Collapse
          in={expanded}
          sx={{
            maxHeight: maxExpandHeight,
            overflow: maxExpandHeight ? "scroll" : "",
          }}>
          <Padding />
          {children}
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default CollapsibleCard;
