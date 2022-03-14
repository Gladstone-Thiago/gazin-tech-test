/* eslint-disable react/jsx-key */
import * as React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import _ from 'lodash';

import {
  Text,
  HStack,
  Icon,
  Select,
  Flex,
  useBreakpointValue,
  Box,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import {
  Table as TableChakra,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  AddComponent,
} from './components';

export type ColumnsType = {
  header: string;
  accessor?: string | 'actions';
  Actions?: any;
};

interface ITableProps {
  columns: ColumnsType[];
  data: any[];
  variant?: 'striped' | 'simple' | 'unstyled';
  total: number;
  setMaxItems: (value: number) => void;
  onNext: () => void;
  onPrevius: () => void;
  children?: React.ReactChild;
}

export const Table: React.FC<ITableProps> = ({
  columns,
  data,
  variant = 'striped',
  setMaxItems,
  onNext,
  onPrevius,
  total,
  children,
}) => {
  const [tableItems, setTableItems] = React.useState<any[]>();
  const [viewPerPage, setViewPerPage] = React.useState<number>(5);
  const [page, setPage] = React.useState<number>(1);

  const responsiveController = useBreakpointValue({ base: false, md: true });

  const setOrderViewPerPage = (quantity: number) => {
    setViewPerPage(quantity);
    setMaxItems(quantity);
  };

  const setNextPage = () => {
    setPage(page + 1);
    onNext();
  };

  const setPreviuesPage = () => {
    setPage(page - 1);
    onPrevius();
  };

  const setOrderList = (listItem: any) => {
    setTableItems(listItem);
  };

  // const orderByAccessor = (accessor: string) => {
  //   const order = data.sort((a, b) => {
  //     if (a[`${accessor}`] < b[`${accessor}`]) {
  //       return -1;
  //     }
  //   });

  //   setOrderList(order);
  // };

  React.useEffect(() => {
    setOrderList(data);
  }, [data]);

  return (
    <Box p={6} bg="write" boxShadow="dark-lg" rounded="md">
      {children}
      <Flex flexDirection="column">
        <TableChakra
          variant={variant}
          bg="gray.150"
          orientation={responsiveController ? 'horizontal' : 'vertical'}
        >
          <Thead>
            <Tr>
              {columns?.map(({ header, accessor }) => {
                return (
                  <Th>
                    <Text
                      fontSize="md"
                      cursor="pointer"
                      // onClick={() => orderByAccessor(accessor)}
                    >
                      {header}
                    </Text>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {tableItems &&
              tableItems?.map((item, index) => {
                return (
                  <Tr>
                    {viewPerPage > index &&
                      columns?.map(({ accessor, Actions }) => {
                        if (accessor === 'actions') {
                          return <Td>{Actions(item)}</Td>;
                        } else {
                          return (
                            <Td>
                              <Text fontSize="sm">{item[`${accessor}`]}</Text>
                            </Td>
                          );
                        }
                      })}
                  </Tr>
                );
              })}
          </Tbody>
        </TableChakra>
        <HStack
          paddingTop={2}
          paddingBottom={2}
          paddingRight={responsiveController ? 10 : 0}
          paddingLeft={responsiveController ? 10 : 0}
          justifyContent={
            responsiveController ? 'space-between' : 'space-around'
          }
          width="100%"
        >
          <HStack>
            <strong>
              {page * viewPerPage - viewPerPage > total
                ? total
                : page * viewPerPage - viewPerPage}
            </strong>{' '}
            <Text>-</Text>{' '}
            <strong>
              {page * viewPerPage > total ? total : page * viewPerPage} /{' '}
              {String(total)}
            </strong>
          </HStack>
          <HStack>
            <Select
              width="70px"
              value={viewPerPage}
              size="sm"
              onChange={(e) => setOrderViewPerPage(Number(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </Select>
            {responsiveController && <Text>Por página</Text>}
          </HStack>
          <HStack>
            {responsiveController && <Text>Página</Text>}
            {page > 1 && (
              <Icon
                as={MdKeyboardArrowLeft}
                onClick={page > 1 && setPreviuesPage}
                opacity={page > 1 ? '100%' : '0%'}
                _hover={{
                  opacity: '50%',
                  cursor: 'pointer',
                  transition: '0.7',
                }}
              />
            )}
            <strong>{page}</strong> <Text>de</Text>{' '}
            <strong>{Math.ceil(total / viewPerPage)}</strong>
            {page < Math.ceil(total / viewPerPage) && (
              <Icon
                as={MdKeyboardArrowRight}
                onClick={page < Math.ceil(total / viewPerPage) && setNextPage}
                opacity={page < Math.ceil(total / viewPerPage) ? '100%' : '0%'}
                _hover={{
                  opacity: '50%',
                  cursor: 'pointer',
                  transition: '0.7',
                }}
              />
            )}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};
