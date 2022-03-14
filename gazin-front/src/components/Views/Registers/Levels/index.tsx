import React, { useEffect, useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import {
  useDisclosure,
  HStack,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Button } from '˜/components/Form/Button';
import { Input } from '˜/components/Form/Input';
import Modal from '˜/components/Form/Modal';
import { Table } from '˜/components/Table';
import { DeleteComponent, EditComponent } from '˜/components/Table/components';
import { useDebounce } from '˜/hooks/useDebounce';
import { translation } from '˜/translation';

import { Get } from './config/service';
import { Action, usersType } from './config/type';
import Create from './create';
import Delete from './delete';
import Edit from './edit';

const Component = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [action] = useState<Action>(null);
  const [information] = useState<usersType>(null);
  const [stateForm, setStateForm] = useState({
    action: action,
    information: information,
  });

  const handleOpenModal = async ({ type, information }) => {
    setStateForm({ action: { type: type }, information: information });
    onOpen();
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const ComponentModal = () => {
    const titleCreate =
      stateForm.action &&
      stateForm.action.type === 'create' &&
      translation('title_administrator_create');
    const titleEdit =
      stateForm.action &&
      stateForm.action.type === 'edit' &&
      translation('title_administrator_edit');
    const titleDelete =
      stateForm.action &&
      stateForm.action.type === 'delete' &&
      translation('title_administrator_delete');

    const ComponentCreate = stateForm.action &&
      stateForm.action.type === 'create' && <Create onClose={onClose} />;
    const ComponentEdit = stateForm.action &&
      stateForm.action.type === 'edit' && (
        <Edit onClose={onClose} data={stateForm.information} />
      );
    const ComponentDelete = stateForm.action &&
      stateForm.action.type === 'delete' && (
        <Delete onClose={onClose} information={stateForm.information} />
      );
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={titleCreate || titleEdit || titleDelete}
        subtitle={translation('title_administrator')}
      >
        {ComponentCreate} {ComponentEdit} {ComponentDelete}
      </Modal>
    );
  };

  const columns = [
    {
      header: 'description',
      accessor: 'description',
      Actions: null,
    },
    {
      header: 'Ações',
      accessor: 'actions',
      Actions: (item: any) => (
        <HStack spacing={1}>
          <DeleteComponent
            information={item}
            onClick={() => {
              handleOpenModal({ type: 'delete', information: item });
            }}
          />
          <EditComponent
            information={item}
            onClick={() => {
              handleOpenModal({ type: 'edit', information: item });
            }}
          />
        </HStack>
      ),
    },
  ];

  const [data, setData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(5);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search);

  const onNext = () => {
    setPage(page + 1);
  };

  const onPreviues = () => {
    setPage(page - 1);
  };

  const get = async () => {
    setLoading(true);
    const response = debouncedSearch
      ? await Get(String(page), String(quantity), debouncedSearch)
      : await Get(String(page), String(quantity));
    setData(response);
    setLoading(false);
  };

  useEffect(() => {
    get();
  }, [page, quantity, debouncedSearch, isOpen === false]);

  return (
    <>
      <ComponentModal />
      <Table
        variant="striped"
        columns={columns}
        data={data?.usuarios}
        total={data?.usuarios?.length}
        onPrevius={onPreviues}
        onNext={onNext}
        setMaxItems={setQuantity}
      >
        <Flex flexDirection="row" mb={5}>
          <Input
            name="search"
            type="text"
            icon={MdSearch}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button
            text="Novo"
            buttonTheme="primary"
            icon={MdAdd}
            type="button"
            isLoading={loading}
            width={100}
            onClick={() =>
              handleOpenModal({ type: 'create', information: information })
            }
          />
        </Flex>
      </Table>
    </>
  );
};

export default Component;
