import { Grid, GridItem } from '@chakra-ui/react';

import { translation } from '../../../translation';
import { Box } from '../../Form/Box';
import { Heading } from '../../Form/Heading';

export default function Dashboard() {
  return (
    <>
      <Heading text={translation('title_dashboard')} />
      <Grid
        mh="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Box minH="80vh">test</Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box minH="40vh">test</Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box minH="40vh">test</Box>
        </GridItem>
        <GridItem colSpan={4}>
          <Box minH="40vh">test</Box>
        </GridItem>
      </Grid>
    </>
  );
}
