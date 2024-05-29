import { Grid } from "@chakra-ui/react";
import React from "react";

type ProjectGridProps =
    | {
          children: React.ReactNode;
          auto?: false;
      }
    | {
          children?: React.ReactNode;
          auto: true;
      };

const ProjectGrid = ({ children, auto }: ProjectGridProps) => {
    return (
        <Grid
            mt={{ base: 8, lg: 14, "2xl": 20 }}
            mb={{ base: 0, lg: 2, "2xl": 4 }}
            px={{ base: 2, lg: 16, "2xl": 24 }}
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
            gap={{ base: 4, lg: 8, "2xl": 12 }}
        >
            {auto ? "" : children}
        </Grid>
    );
};

export default ProjectGrid;
