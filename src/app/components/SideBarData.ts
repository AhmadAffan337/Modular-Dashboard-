import {
  User,
  Settings,
  BarChart,
  Mail,
  Bell,
  Calendar,
  List,
  FileText,
  ShoppingCart,
  Globe,
  Info,
} from "lucide-react";

import React from "react";

interface SideBarState {
  id: number;
  name: string;
  icon: React.ElementType;
}

export const SideBarItems: SideBarState[] = [
  { id: 1, name: "User", icon: User },
  { id: 2, name: "Settings", icon: Settings },
  { id: 3, name: "Analytics", icon: BarChart },
  { id: 4, name: "Messages", icon: Mail },
  { id: 5, name: "Notifications", icon: Bell },
  { id: 6, name: "Calendar", icon: Calendar },
  { id: 7, name: "Tasks", icon: List },
  { id: 8, name: "Documents", icon: FileText },
  { id: 9, name: "Orders", icon: ShoppingCart },
  { id: 10, name: "Global", icon: Globe },
  { id: 11, name: "Info", icon: Info },
];
