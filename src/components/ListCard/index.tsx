import { Card, List, ListItemButton, ListItemText } from "@mui/material";

export interface ListCardItem {
  id: string;
  label: string;
}

interface ListCardProps {
  items: (ListCardItem & {
    selected?: boolean;
    onClick?: (item: ListCardItem) => void;
  })[];
}

const ListCard = ({ items }: ListCardProps) => {
  return (
    <List component={Card} elevation={0}>
      {items.map((item) => (
        <ListItemButton
          key={item.id}
          selected={item.selected}
          onClick={item.onClick?.bind(null, item)}>
          <ListItemText>{item.label}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default ListCard;
